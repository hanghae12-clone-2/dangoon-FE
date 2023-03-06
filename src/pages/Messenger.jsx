import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import MessengerList from '../components/messenger/MessengerList';
import MessengerItem from '../components/messenger/MessengerItem';

import Axios from '../api/axios';
import QUERY from '../constants/query';
import useGetQuery from '../hooks/useGetQuery';
import { useParams } from 'react-router-dom';
import Storage from '../utils/localStorage';

const axios = new Axios(QUERY.AXIOS_PATH.SEVER);

export default function Messenger() {
  const [createRoomCheck, setCreateRoomCheck] = useState(false);
  const [HandleQuery, setHandleQuery] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const { postId } = useParams();
  const userName = Storage.getUserName();

  useEffect(() => {
    axios.post(`/chat/room/${postId}`).then(() => {
      setCreateRoomCheck(true);
    });
  }, [postId]);

  const {
    isLoading,
    isError,
    data: rooms,
  } = useGetQuery(
    ['rooms'],
    QUERY.AXIOS_PATH.SEVER,
    '/chat/rooms',
    createRoomCheck
  );

  const { data: detailRoom, refetch } = useGetQuery(
    ['room', roomId],
    QUERY.AXIOS_PATH.SEVER,
    `/chat/room/${roomId}`,
    HandleQuery,
    data => {
      console.log(data);
    }
  );
  // todo 클릭할때 roomId에러 해결하기
  const handleChatRoom = roomId => {
    setRoomId(roomId);
    setHandleQuery(true);
    refetch();
  };

  return (
    <>
      {isLoading && <p>로딩중</p>}
      {isError && <p>에러</p>}
      {rooms && (
        // <ChatContainer />
        <MessengerWrapper>
          <NavbarContainer>
            <FaUserCircle />
          </NavbarContainer>
          <MessengerList
            rooms={rooms.data.result}
            userName={userName}
            onChatRoom={handleChatRoom}
          />
          <MessengerItem detailRoom={detailRoom} userName={userName} />
        </MessengerWrapper>
      )}
    </>
  );
}

const MessengerWrapper = styled.section`
  display: flex;
  width: 70rem;
  height: 100%;
  margin: auto;
  border: 1px solid ${props => props.theme.color.light_messenger};

  animation: enlargement 300ms 1;
  @keyframes enlargement {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`;

const NavbarContainer = styled.div`
  width: 7rem;
  height: 100%;
  color: ${props => props.theme.color.messenger};
  background-color: ${props => props.theme.color.light_messenger};
  padding: 2rem 0;
  font-size: ${props => props.theme.fontSize.large};
  text-align: center;

  svg {
    border: 2px solid ${props => props.theme.color.carrot_orange};
    border-radius: 50%;
  }
`;
