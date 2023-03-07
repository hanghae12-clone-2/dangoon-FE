import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../../elements/Img';
import Text from '../../elements/Text';

import { FaUserCircle } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import useGetQuery from '../../hooks/useGetQuery';

export default function MessengerList({ rooms, userName, onChatRoom }) {
  return (
    <MessegeListContainer>
      <ListTitleContainer>
        <Text regular>{userName}</Text>
      </ListTitleContainer>
      <MessegeList>
        {rooms.map(v => (
          <Li key={uuidv4()} onClick={() => onChatRoom(v.roomId)}>
            <ContentContainer>
              <Text large_medium>
                <FaUserCircle />
              </Text>
              <Information>
                <Title>
                  <Text small>
                    <span>{v.partner}</span>
                    {`${v.location}`}
                  </Text>
                </Title>
                <Content>
                  <Text small>{v.lastChat}</Text>
                </Content>
              </Information>
            </ContentContainer>
            {v.unreadMessageCount !== 0 && (
              <UnreadMessageCount>{v.unreadMessageCount}</UnreadMessageCount>
            )}
            <Img src={v.imageUrl} small />
          </Li>
        ))}
      </MessegeList>
    </MessegeListContainer>
  );
}

const MessegeListContainer = styled.div`
  width: 35rem;
  height: 90%;
`;

const ListTitleContainer = styled.ul`
  width: 100%;
  height: 10%;
  padding: 1rem;
  border-right: 1px solid ${props => props.theme.color.light_messenger};
  border-bottom: 1px solid ${props => props.theme.color.light_messenger};
`;

const MessegeList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.color.light_messenger};
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.color.light_messenger};
  }

  svg {
    color: ${props => props.theme.color.messenger};
  }

  p {
    margin: 0.2rem;
  }

  span {
    font-weight: ${props => props.theme.fontWeight.bold};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Information = styled.div``;

const Title = styled.div`
  display: -webkit-box;

  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Content = styled(Title)``;

const UnreadMessageCount = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.carrot_orange};
  border-radius: 50%;
  font-size: 0.9rem;
  transform: translate(-0.5rem, 1.3rem);
`;
