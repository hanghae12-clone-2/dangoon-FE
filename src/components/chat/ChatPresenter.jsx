import * as React from 'react';
import styled from 'styled-components';

export default function ChatPresenter({
  contents,
  message,
  username,
  setMessage,
  setUsername,
  handleEnter,
}) {
  return (
    <ChatContainer>
      <ChatHeader>
        유저이름 :
        <input value={username} onChange={e => setUsername(e.target.value)} />
      </ChatHeader>
      <ChatContent>
        {contents.map(message => (
          <div> {contents} </div>
        ))}
      </ChatContent>
      <div>
        <input
          placeholder='input your messages...'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={() => handleEnter(username, message)}>send</button>
      </div>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: 40rem;
  height: 40rem;
`;

const ChatHeader = styled.div`
  height: 5rem;
`;

const ChatContent = styled.div`
  height: 20rem;
`;
