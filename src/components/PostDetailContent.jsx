import React from 'react';
import styled from 'styled-components';
import { HiOutlineUserCircle } from 'react-icons/hi';
import Text from '../elements/Text';

export default function PostDetailContent({ detail }) {
  const { title, content, price, nickName, wishCount, location, createdAt } =
    detail;

  return (
    <DetailContainer>
      <UserContainer>
        <Icon>
          <HiOutlineUserCircle />
        </Icon>
        <UserTextContainer>
          <Text userTitle>{nickName}</Text>
          <Text userLocation>{location}</Text>
        </UserTextContainer>
      </UserContainer>
      <UserContent>
        <Text regular>{title}</Text>
      </UserContent>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40rem;
  margin: 0 auto;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.color.dark_white};
`;

const Icon = styled.div`
  margin-right: 1rem;
  font-size: ${props => props.theme.fontSize.large_medium};
`;

const UserTextContainer = styled.div``;

const UserContent = styled.div`
  margin: 2rem 0;
`;
