import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import MessengerList from '../components/messenger/MessengerList';
import MessengerItem from '../components/messenger/MessengerItem';
import ChatContainer from '../components/chat/ChatContainer';

import Axios from '../api/axios';
import QUERY from '../constants/query';

const axios = new Axios(QUERY.AXIOS_PATH.SEVER);

const messege = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Messenger() {
  // useEffect(() => {
  //   axios.post('/chat/room/1');
  // }, []);
  return (
    <ChatContainer />
    // <MessengerWrapper>
    //   <NavbarContainer>
    //     <FaUserCircle />
    //   </NavbarContainer>
    //   <MessengerList list={messege} />
    //   <MessengerItem />
    // </MessengerWrapper>
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
