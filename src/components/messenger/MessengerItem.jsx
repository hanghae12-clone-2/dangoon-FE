import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../elements/Text';
import Input from '../../elements/Input';

import { v4 as uuidv4 } from 'uuid';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import { IoChatbubblesSharp } from 'react-icons/io5';

import Button from '../../elements/Button';

export default function MessengerItem({
  detailRoom,
  userName,
  contents,
  message,
  setMessage,
  handleEnter,
}) {
  //todo 문구 랜더링 에러
  if (!detailRoom)
    return (
      <ItemContainer>
        <ErrorContainer>
          <IoChatbubblesSharp />
          채팅 상대를 선택해 주세요.
        </ErrorContainer>
      </ItemContainer>
    );
  return (
    <ItemContainer>
      <ItemTitleContainer>
        <Text large_medium>
          <FaUserCircle />
        </Text>
        <Text regular>{detailRoom.data.result.partner}</Text>
      </ItemTitleContainer>
      <ItemBodyContainer>
        {contents.map(v =>
          v.sender !== userName ? (
            <OpponentContainer key={uuidv4()}>
              <Content>
                <Text large_medium>
                  <FaUserCircle />
                </Text>
                <NickName>{v.sender}</NickName>
              </Content>
              <SpeechBubbleLeft>
                <MessageLeft>{v.message}</MessageLeft>
              </SpeechBubbleLeft>
            </OpponentContainer>
          ) : (
            <MeContainer key={uuidv4()}>
              <SpeechBubbleRight>
                <Message>{v.message}</Message>
              </SpeechBubbleRight>
            </MeContainer>
          )
        )}
      </ItemBodyContainer>
      <TextInput>
        <Input
          multiLine
          placeholder='메세지를 입력해주세요.'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <UnderBar>
          <AiFillPicture />
          <BtnContainer>
            <span>{`${message.length}/1000`}</span>
            <Button full onClick={handleEnter}>
              전송
            </Button>
          </BtnContainer>
        </UnderBar>
      </TextInput>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 1rem;

  svg {
    color: ${props => props.theme.color.messenger};
    font-size: ${props => props.theme.fontSize.xxlarge};
  }
`;

const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.45rem;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.color.light_messenger};
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.color.messenger};
  }
`;

const ItemBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-top: 1.5rem;
  margin-left: 3rem;
  gap: 0.5rem;

  p {
    margin: 0;
  }

  svg {
    color: ${props => props.theme.color.messenger};
  }
`;

const MeContainer = styled(OpponentContainer)`
  align-items: flex-end;
  margin-right: 3rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NickName = styled.div`
  font-size: ${props => props.theme.fontSize.large_regular};
`;

const Message = styled.div`
  margin: 0 1rem;
  padding: 0.3rem;
  font-size: ${props => props.theme.fontSize.large_regular};
`;

const MessageLeft = styled(Message)`
  margin: 0 1rem;
`;

const SpeechBubbleLeft = styled.div`
  max-width: 17.5rem;
  position: relative;
  background: #ff9500;
  border-radius: 0.4em;
  word-wrap: break-word;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.719em solid transparent;
    border-right-color: #ff9500;
    border-left: 0;
    border-top: 0;
    margin-top: -0.359em;
    margin-left: -0.719em;
  }
`;

const SpeechBubbleRight = styled.div`
  max-width: 17.5rem;
  position: relative;
  background: #ff9500;
  border-radius: 0.4em;
  word-wrap: break-word;

  ::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.719em solid transparent;
    border-left-color: #ff9500;
    border-right: 0;
    border-top: 0;
    margin-top: -0.359em;
    margin-right: -0.719em;
  }
`;

const TextInput = styled.div`
  position: relative;
  display: flex;

  width: 95%;
  height: 30rem;
  padding: 1rem;

  textarea {
    height: 8rem;
    overflow: hidden;
  }

  textarea:focus ~ div {
    outline: none;
    border-left: 2px solid ${props => props.theme.color.carrot_orange};
    border-right: 2px solid ${props => props.theme.color.carrot_orange};
    border-bottom: 2px solid ${props => props.theme.color.carrot_orange};
  }
`;

const UnderBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95.2%;
  height: 3rem;
  top: 0;
  padding: 1rem 1rem;
  margin-top: 1.5rem;
  border-left: 2px solid #c4c4c4;
  border-right: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
  border-radius: 0 0 1rem 1rem;
  transform: translateY(7rem);

  svg {
    color: #878c92;
    border-radius: 1rem;
    font-size: ${props => props.theme.fontSize.large_regular};
  }
`;

const BtnContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 5rem;
  gap: 0.5rem;

  button {
    color: ${props => props.theme.color.white};
    background-color: #dddfe1;
  }

  span {
    position: absolute;
    right: 0;
    color: ${props => props.theme.color.messenger};
    transform: translate(-5.5rem);
  }
`;
