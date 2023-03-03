import React from 'react';
import styled, { css } from 'styled-components';
import Img from '../elements/Img';
import Text from '../elements/Text';

export default function MainInfo() {
  return (
    <>
      <FirstContainer>
        <ContentContainer>
          <Comment>
            <Text large>당신 근처의</Text>
            <Text large>당근마켓</Text>
            <Text small>중고 거래부터 동네 정보까지, 이웃과 함께해요.</Text>
            <Text small>가깝고 따뜻한 당신의 근처를 만들어요.</Text>
          </Comment>
          <Img
            srcset='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp '
            alt='중고거래, 동네생활 질문글과 동네가게'
            src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png'
          />
        </ContentContainer>
      </FirstContainer>
      <SecondContainer>
        <ContentContainer>
          <Img
            srcset='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp '
            alt='우리동네 중고 직거래 사진'
            src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png'
          />
          <Comment marginL>
            <Text large>우리 동네</Text>
            <Text large>중고 직거래 마켓</Text>
            <Text small>
              동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
            </Text>
          </Comment>
        </ContentContainer>
      </SecondContainer>
      <ThirdContainer>
        <ContentContainer third>
          <IconContainer>
            <Comment>
              <Text large>이웃과 함께 하는</Text>
              <Text large>동네생활</Text>
              <Text small>
                우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
              </Text>
              <IconText>
                <Img
                  small
                  src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg'
                />
                <Text vMargin bold>
                  우리동네질문
                </Text>
                <Text vMargin>궁금한 게 있을 땐 이웃에게 물어보세요.</Text>
              </IconText>
              <IconText>
                <Img
                  small
                  src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg'
                />
                <Text bold>우리동네질문</Text>
                <Text>궁금한 게 있을 땐 이웃에게 물어보세요.</Text>
              </IconText>
              <IconText>
                <Img
                  small
                  src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg'
                />
                <Text bold>우리동네질문</Text>
                <Text>궁금한 게 있을 땐 이웃에게 물어보세요.</Text>
              </IconText>
            </Comment>
          </IconContainer>
          <Img
            srcset='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp '
            loading='lazy'
            alt='이웃과 함께하는 동네생활'
            src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png'
          ></Img>
        </ContentContainer>
      </ThirdContainer>
      <FourthContainer>
        <ContentContainer>
          <Img
            srcset='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp '
            loading='lazy'
            alt='내 근처에서 찾는 동네가게'
            src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-0c8b631ac2294ac5a3b3e7a3a5580c3e68a3303ad2aded1e84aa57a2e1442786.png'
          />
          <Comment marginL>
            <Text large>내 근처에서 찾는</Text>
            <Text large>동네가게</Text>
            <Text small>우리 동네 가게를 찾고 있나요? </Text>
            <Text small>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!</Text>
          </Comment>
        </ContentContainer>
      </FourthContainer>
    </>
  );
}

const FirstContainer = styled.div`
  width: 100vw;
  height: 50rem;
  background-color: ${props => props.theme.color.light_orange};
`;

const SecondContainer = styled(FirstContainer)`
  background-color: ${props => props.theme.color.white};
`;

const ThirdContainer = styled(FirstContainer)`
  background-color: ${props => props.theme.color.melon};
`;

const FourthContainer = styled(FirstContainer)`
  background-color: ${props => props.theme.color.white};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65rem;
  margin: auto;
  ${props =>
    props.third &&
    css`
      width: 70rem;
    `}
`;

const Comment = styled.div`
  width: 100%;
  ${props =>
    props.marginL &&
    css`
      margin-left: 6rem;
    `}

  ${props =>
    props.marginR &&
    css`
      margin-right: 3rem;
    `}
`;

const IconContainer = styled.div`
  display: flex;
`;

const IconText = styled.div`
  display: inline-block;
  width: 9rem;
`;
