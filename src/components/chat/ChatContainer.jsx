import React, { useEffect, useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
import SockJs from '../../utils/sockJs';
import styled from 'styled-components';
import MessengerItem from '../messenger/MessengerItem';

export default function ChatContainer({ roomId, userName, detailRoom }) {
  const sockJs = useRef(null);
  const [contentCnt, setContentCnt] = useState(0);
  const [contents, setContents] = useState([]);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const imgData = useRef();

  useEffect(() => {
    sockJs.current = new SockJs('http://1.227.192.121:8080/ws/chat/');
    sockJs.current.connect(roomId);
    setContents([...detailRoom.data.result.messageDtoList]);

    return () => {
      sockJs.current.disconnect();
    };
  }, [detailRoom.data.result.messageDtoList, roomId]);

  useEffect(() => {
    sockJs.current.connect(roomId, addMessage);
  }, [contentCnt]);

  const handleEnter = () => {
    sockJs.current.send(roomId, userName, message, image);
    setMessage('');
    setContentCnt(state => state + 1);
  };

  const addMessage = newMessage => {
    console.log(imgData.current);
    setContents(prev => [
      ...prev,
      {
        sender: newMessage.sender,
        message: newMessage.message,
        createdAt: Date.now(),
        image: imgData.current,
      },
    ]);
    setImage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    actionImgCompress(file);
  };

  const encodeFileToBase64 = image => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => resolve(event.target.result);
      reader.onerror = error => reject(error);
    });
  };

  const actionImgCompress = async fileSrc => {
    console.log('압축 시작');

    const options = {
      maxSizeMB: 0.04,
      maxWidthOrHeight: 840,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(fileSrc, options);
    await encodeFileToBase64(compressedFile).then(data => {
      imgData.current = data;
      setImage(data);
    });
  };

  return (
    <ChatWrapper>
      <MessengerItem
        detailRoom={detailRoom}
        userName={userName}
        contents={contents}
        message={message}
        setMessage={setMessage}
        handleEnter={handleEnter}
        onSubmit={handleSubmit}
        onImageChange={handleImageChange}
        srcImg={image}
      />
    </ChatWrapper>
  );
}
// imgData.current
const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
