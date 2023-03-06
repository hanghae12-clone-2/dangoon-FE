import React, { useEffect, useRef, useState } from 'react';
import QUERY from '../../constants/query';
import SockJs from '../../utils/sockJs';
import ChatPresenter from './ChatPresenter';

// import Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
import styled from 'styled-components';

// let sockJS = new SockJS('http://13.209.11.12/ws/chat/');
// let stompClient = Stomp.over(sockJS);

// const sockJs = new SockJs('http://13.209.11.12/ws/chat/');

export default function ChatContainer() {
  const sockJs = useRef(null);
  const [contentCnt, setContentCnt] = useState(0);
  const [contents, setContents] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    sockJs.current = new SockJs('http://13.209.11.12/ws/chat/');
    sockJs.current.connect('79d8f51f-7a6a-4bd5-9649-cbbda78075ca');
  }, []);

  useEffect(() => {
    sockJs.current.connect(
      '79d8f51f-7a6a-4bd5-9649-cbbda78075ca',
      newMessage => {
        addMessage(newMessage.message);
      }
    );
  }, [contentCnt]);

  const handleEnter = (username, content) => {
    sockJs.current.send(
      '79d8f51f-7a6a-4bd5-9649-cbbda78075ca',
      username,
      message
    );
    setMessage('');
    setContentCnt(state => state + 1);
    // addMessage(content);
  };

  const addMessage = message => {
    setContents(prev => [...prev, message]);
  };

  return (
    <ChatWrapper>
      <ChatPresenter
        contents={contents}
        handleEnter={handleEnter}
        message={message}
        setMessage={setMessage}
        username={username}
        setUsername={setUsername}
      />
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
