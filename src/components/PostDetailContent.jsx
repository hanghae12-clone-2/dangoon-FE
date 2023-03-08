import React from 'react';
import styled, { css } from 'styled-components';
import { BiUserCircle, BiTimeFive } from 'react-icons/bi';
import {
  AiOutlineSmile,
  AiOutlineFrown,
  AiFillLike,
  AiFillDislike,
  AiFillHeart,
} from 'react-icons/ai';
import Text from '../elements/Text';
import formatAgo from '../utils/formatDate';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import ROUTER from '../constants/router';

export default function PostDetailContent({
  detail,
  postId,
  userName,
  temperatureServer,
  onLikeUp,
  onLikeDown,
  onDeletePost,
}) {
  const {
    title,
    content,
    price,
    nickname,
    isWish,
    wishCount,
    chatCount,
    location,
    createdAt,
    temperature,
  } = detail;

  const temp = temperatureServer ? temperatureServer : temperature;
  const setFormatDate = date => formatAgo(date);

  return (
    <DetailContainer>
      <UserContainer>
        <UserImgTitle>
          <Icon>
            <BiUserCircle />
          </Icon>
          <UserTextContainer>
            <Text userTitle>{nickname}</Text>
            <Text userLocation>{location}</Text>
          </UserTextContainer>
        </UserImgTitle>
        <ProgressContainer temp={temp}>
          <span>
            {temp}°C
            <Progress>
              <ProgressBar temp={temp} />
            </Progress>
          </span>
          {temp >= 36.5 ? <AiOutlineSmile /> : <AiOutlineFrown />}
          <LikeContainer>
            <Like>
              <AiFillLike onClick={onLikeUp} />
            </Like>
            <DisLike>
              <AiFillDislike onClick={onLikeDown} />
            </DisLike>
          </LikeContainer>
        </ProgressContainer>
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
        <LikeAndChat>
          <Text grey>{`관심 ${wishCount} · 채팅${chatCount}`}</Text>
          <UserTouch>
            {nickname !== userName ? (
              <>
                <LikeBtn isWish={false}>
                  <Button>
                    <AiFillHeart />
                  </Button>
                </LikeBtn>
                <Link to={`${ROUTER.PATH.MESSENGER}/${postId}`}>
                  <Button outline>채팅하기</Button>
                </Link>
              </>
            ) : (
              <EditContainer>
                <Link to={`${ROUTER.PATH.EDIT}/${postId}`} state={{ detail }}>
                  <Button outline>수정</Button>
                </Link>
                <Button outline onClick={onDeletePost}>
                  삭제
                </Button>
              </EditContainer>
            )}
          </UserTouch>
        </LikeAndChat>
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
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
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

const LikeAndChat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const UserTouch = styled.div`
  display: flex;
  align-items: center;
`;

const EditContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 5rem;
  }
`;

const UserImgTitle = styled.div`
  display: flex;
`;

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props =>
    props.temp >= 36.5 ? props.theme.color.dark_mint : props.theme.color.red};

  svg {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const Progress = styled.div`
  width: 8rem;
  height: 0.5rem;
  background-color: #dedede;
  font-weight: 600;
  font-size: 0.8rem;
`;

const ProgressBar = styled.div`
  width: ${props => `${props.temp}%`};
  height: 0.5rem;
  padding: 0;
  text-align: center;
  background-color: ${props =>
    props.temp >= 36.5 ? props.theme.color.dark_mint : props.theme.color.red};
  color: #111;
`;

const LikeContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 0.5rem;
  z-index: 1000;
  transform: translateY(2rem);
`;

const Like = styled.div`
  color: ${props => props.theme.color.carrot_orange};
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const DisLike = styled(Like)``;

const LikeBtn = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 2.3rem;
    margin: 0 0.5rem;
    font-size: 1.3rem;
    transition: all 600ms ease-in-out;
    ${props =>
      props.isWish
        ? css`
            color: #e74133;
            background-color: white;
          `
        : css`
            color: white;
            background-color: #e74133;
          `}
  }

  ${props =>
    props.isWish
      ? css`
          svg {
            transform: rotate(1turn);
          }
        `
      : css`
          svg {
            transform: rotate(1turn);
          }
        `}
`;
