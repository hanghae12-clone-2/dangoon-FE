import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Text from '../../elements/Text';
import Input from '../../elements/Input';

import { v4 as uuidv4 } from 'uuid';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { IoChatbubblesSharp } from 'react-icons/io5';

import Button from '../../elements/Button';
import formatAgo from '../../utils/formatDate';

export default function MessengerItem({
  detailRoom,
  userName,
  contents,
  message,
  setMessage,
  handleEnter,
  onSubmit,
  onImageChange,
  onImgDelete,
  srcImg,
}) {
  const scrollRef = useRef();

  useEffect(() => {
    if (contents) {
      scrollRef.current.scrollIntoView({
        block: 'end',
      });
    }
  }, [contents]);

  const setFormatDate = date => {
    return formatAgo(date);
  };
  console.log(contents);
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
        {contents.map((v, i, arr) =>
          v.sender !== userName ? (
            <OpponentContainer key={uuidv4()}>
              <Content>
                <Text large_medium>
                  <FaUserCircle />
                </Text>
                <NickName>{v.sender}</NickName>
              </Content>
              <SpeechBubbleLeft>
                <MessageLeft>
                  <Message>
                    {v.message}
                    {v.image && (
                      <ImgLeft regular srcImg={v.image} alt='preview' />
                    )}
                  </Message>
                </MessageLeft>
              </SpeechBubbleLeft>
              <Date>
                <Text userLocation grey>
                  <BiTimeFive />
                </Text>
                <Text userLocation grey>
                  {setFormatDate(v.createdAt)}
                </Text>
              </Date>
            </OpponentContainer>
          ) : (
            <MeContainer key={uuidv4()}>
              <SpeechBubbleRight>
                <Message>
                  {v.message}
                  {v.image && (
                    <ImgRight regular srcImg={v.image} alt='preview' />
                  )}
                </Message>
              </SpeechBubbleRight>
              <Date>
                <Text userLocation grey>
                  <BiTimeFive />
                </Text>
                <Text userLocation grey>
                  {setFormatDate(v.createdAt)}
                </Text>
              </Date>
            </MeContainer>
          )
        )}
        <Scroll ref={scrollRef} />
      </ItemBodyContainer>
      <TextInput>
        <Input
          multiLine
          placeholder='메세지를 입력해주세요.'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        {srcImg && (
          <SrcImg>
            <Img regular srcImg={srcImg} alt='preview' />
            <RiDeleteBack2Fill onClick={onImgDelete} />
          </SrcImg>
        )}
        <UnderBar>
          <Form onSubmit={onSubmit} encType='multipart/form-data'>
            <Label htmlFor='file-upload'>
              <AiFillPicture />
              <InputImg
                id='file-upload'
                type='file'
                accept='image/*'
                onChange={onImageChange}
              />
            </Label>
            <BtnContainer>
              <span>{`${message.length}/1000`}</span>
              <Button type='button' full onClick={handleEnter}>
                전송
              </Button>
            </BtnContainer>
          </Form>
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
  width: 100%;
  height: 100%;
  padding: 1rem 0;
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

const Scroll = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NickName = styled.div`
  font-size: ${props => props.theme.fontSize.large_regular};
`;

const Message = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  font-size: ${props => props.theme.fontSize.large_regular};
`;

const MessageLeft = styled(Message)`
  margin: 0 1rem;
`;

const SpeechBubbleLeft = styled.div`
  max-width: 17.5rem;
  min-width: 35px;
  min-height: 35px;
  position: relative;
  background: ${props => props.theme.color.messenger};
  border-radius: 0.4em;
  word-wrap: break-word;
  line-height: 1.6;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.719em solid transparent;
    border-right-color: ${props => props.theme.color.messenger};
    border-left: 0;
    border-top: 0;
    margin-top: -0.359em;
    margin-left: -0.719em;
  }
`;

const SpeechBubbleRight = styled.div`
  max-width: 17.5rem;
  min-width: 35px;
  min-height: 35px;
  position: relative;
  color: ${props => props.theme.color.white};
  background: #ff9500;
  border-radius: 0.4em;
  word-wrap: break-word;
  line-height: 1.6;

  ::after {
    content: '';
    position: absolute;
    right: 2px;
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
    padding-right: 7rem;
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

const Date = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: black;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InputImg = styled.input`
  display: none;
`;

const Img = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 6rem;
  width: 6rem;
  /* padding-bottom: 100%; */
  border: none !important;
  border-radius: 0.5rem;
  object-fit: cover;
  background-image: url(${props => props.srcImg});
  background-size: 100% 100%;
  transform: translate(-1.5rem, 2rem);
`;

const ImgRight = styled.div`
  height: 6rem;
  width: 6rem;
  margin: 0;
  /* padding-bottom: 100%; */
  border: none !important;
  border-radius: 0.5rem;
  object-fit: cover;
  background-image: url(${props => props.srcImg});
  background-size: 100% 100%;
`;

const SrcImg = styled.div`
  svg {
    position: absolute;
    top: 0;
    color: ${props => props.theme.color.red};
    transform: translate(-1.5rem, 2rem);
  }
`;

const ImgLeft = styled.div`
  height: 6rem;
  width: 6rem;
  margin: 0;
  /* padding-bottom: 100%; */
  border: none !important;
  border-radius: 0.5rem;
  object-fit: cover;
  background-image: url(${props => props.srcImg});
  background-size: 100% 100%;
`;
