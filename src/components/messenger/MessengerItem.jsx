import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../elements/Text';
import Input from '../../elements/Input';

import { FaUserCircle } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import Button from '../../elements/Button';

export default function MessengerItem() {
  const [text, setText] = useState('');
  return (
    <ItemContainer>
      <ItemTitleContainer>
        <Text large_medium>
          <FaUserCircle />
        </Text>
        <Text regular>{'성인'}</Text>
      </ItemTitleContainer>
      <ItemBodyContainer>
        <OpponentContainer>12312312</OpponentContainer>
        <MeContainer>12312312</MeContainer>
      </ItemBodyContainer>
      <TextInput>
        <Input
          multiLine
          placeholder='메세지를 입력해주세요.'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <UnderBar>
          <AiFillPicture />
          <BtnContainer>
            <span>{`${text.length}/1000`}</span>
            <Button full>전송</Button>
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
`;

const OpponentContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 1.5rem;
  margin-left: 3rem;
`;

const MeContainer = styled(OpponentContainer)`
  justify-content: end;
  margin-right: 3rem;
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
