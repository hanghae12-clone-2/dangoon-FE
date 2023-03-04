import React from 'react';
import styled from 'styled-components';
import { BiUserCircle, BiTimeFive } from 'react-icons/bi';
import Text from '../elements/Text';
import formatAgo from '../utils/formatDate';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import ROUTER from '../constants/router';

export default function PostDetailContent({ detail }) {
  const { title, content, price, nickName, wishCount, location, createdAt } =
    detail;

  const setFormatDate = date => formatAgo(date);

  return (
    <DetailContainer>
      <UserContainer>
        <Icon>
          <BiUserCircle />
        </Icon>
        <UserTextContainer>
          <Text userTitle>{nickName}</Text>
          <Text userLocation>{location}</Text>
        </UserTextContainer>
      </UserContainer>
      <UserContent>
        <Text regular>{title}</Text>
        <Date>
          <Text userLocation grey>
            <BiTimeFive />
          </Text>
          <Text userLocation grey>
            {setFormatDate(createdAt)}
          </Text>
        </Date>
        <Text regular>{price}원</Text>
        <Text userContent>{content}</Text>
        <Text grey>{`관심 ${wishCount} · 채팅`}</Text>
      </UserContent>
      <UserTouch>
        <Button like />
        <Button outline>
          <Link to={ROUTER.PATH.MESSENGER}>채팅하기</Link>
        </Button>
      </UserTouch>
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
  border-bottom: 1px solid ${props => props.theme.color.dark_white};
`;

const Date = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const UserTouch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;
