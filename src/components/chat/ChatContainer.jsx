import React, { useEffect, useRef, useState } from 'react';
import QUERY from '../../constants/query';
import ChatPresenter from './ChatPresenter';

import Stomp from 'stompjs';
// import * as StompJs from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import styled from 'styled-components';

const ROOM_SEQ = 1;

let sockJS = new SockJS('http://13.209.11.12/ws/chat/');
let stompClient = Stomp.over(sockJS);

export default function ChatContainer() {
  const [contents, setContents] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe('/chat/room/enter/1', data => {
        const newMessage = JSON.parse(data.body);
        addMessage(newMessage);
      });
    });
  }, [contents]);

  const handleEnter = (username, content) => {
    const newMessage = { username, content };
    stompClient.send(
      '/app/chat/message',
      {},
      JSON.stringify({
        // type: 'TALK',
        roomId: '1',
        message: message,
      })
    );
    setMessage('');
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
