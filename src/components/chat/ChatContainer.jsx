import React, { useEffect, useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
import SockJs from '../../utils/sockJs';
import styled from 'styled-components';
import MessengerItem from '../messenger/MessengerItem';
import { useQueryClient } from '@tanstack/react-query';

export default function ChatContainer({ roomId, userName, detailRoom }) {
  const sockJs = useRef(null);
  const [contentCnt, setContentCnt] = useState(0);
  const [contents, setContents] = useState([]);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const imgData = useRef();
  const query = useQueryClient();

  useEffect(() => {
    query.invalidateQueries(['rooms']);
  }, [contents, contentCnt]);

  useEffect(() => {
    sockJs.current = new SockJs('http://13.209.11.12/ws/chat/', message =>
      addMessage(message)
    );
    sockJs.current.connect(roomId);
    setContents([...detailRoom.data.result.messageDtoList]);

    return () => {
      sockJs.current.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    sockJs.current.connect(roomId);
  }, [contentCnt, roomId]);

  const handleEnter = () => {
    sockJs.current.send(roomId, userName, message, imgData.current);
    setMessage('');
    setContentCnt(state => state + 1);
  };

  const addMessage = newMessage => {
    setContents(prev => [
      ...prev,
      {
        sender: newMessage.sender,
        message: newMessage.message,
        createdAt: newMessage.createdAt,
        image: newMessage.image,
      },
    ]);
    setImage('');
  };

  const handleSubmit = e => {
    // e.preventDefault();
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    actionImgCompress(file);
    e.target.value = '';
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
    const options = {
      maxSizeMB: 0.04,
      maxWidthOrHeight: 840,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(fileSrc, options);
    await encodeFileToBase64(compressedFile).then(data => {
      imgData.current = data;
      setImage();
    });
  };

  const handleImageDelete = () => {
    imgData.current = '';
    setImage(null);
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
        onImgDelete={handleImageDelete}
        srcImg={imgData.current}
      />
    </ChatWrapper>
  );
}
// imgData.current
const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
