import React, { useEffect, useRef, useState } from 'react';
import SockJs from '../../utils/sockJs';
import styled from 'styled-components';
import MessengerItem from '../messenger/MessengerItem';

export default function ChatContainer({ roomId, userName, detailRoom }) {
  const sockJs = useRef(null);
  const [contentCnt, setContentCnt] = useState(0);
  const [contents, setContents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    sockJs.current = new SockJs('http://13.209.11.12/ws/chat/');
    sockJs.current.connect(roomId);
    setContents([...detailRoom.data.result.messageDtoList]);

    return () => {
      sockJs.current.disconnect();
    };
  }, [detailRoom.data.result.messageDtoList, roomId]);

  useEffect(() => {
    sockJs.current.connect(roomId, newMessage => {
      console.log(newMessage);
      addMessage(newMessage);
    });
  }, [contentCnt]);

  const handleEnter = () => {
    sockJs.current.send(roomId, userName, message);
    setMessage('');
    setContentCnt(state => state + 1);
  };

  const addMessage = newMessage => {
    setContents(prev => [
      ...prev,
      { sender: newMessage.sender, message: newMessage.message },
    ]);
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
      />
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
