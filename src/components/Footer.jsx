import React from 'react';
import { AiFillApple, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaGooglePlay, FaBlogger } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

import styled from 'styled-components';
import Anchor from '../elements/Anchor';
import Text from '../elements/Text';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <QuestionContainer>
          <QuestionUrl>
            <Anchor url='https://cs.kr.karrotmarket.com/wv/faqs'>
              자주 묻는 질문
            </Anchor>
            <Anchor url='https://team.daangn.com/'>회사 소개</Anchor>
            <Anchor url='https://team.daangn.com/jobs/'>인재 채용</Anchor>
          </QuestionUrl>
          <DownLoadContainer>
            <h4>당근마켓 앱 다운로드</h4>
            <DownLoadBtn>
              <Anchor url='https://apps.apple.com/kr/app/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%ED%95%84%EC%88%98%EC%95%B1/id1018769995'>
                <Apple>
                  <AiFillApple />
                  App Store
                </Apple>
              </Anchor>
              <Anchor url='https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko'>
                <Google>
                  <FaGooglePlay />
                  Google Play
                </Google>
              </Anchor>
            </DownLoadBtn>
          </DownLoadContainer>
        </QuestionContainer>
        <SectionContainer>
          <SecurityContainer>
            <InfomationContainer>
              <Text grey>
                <span>대표</span> 항해99 | <span>사업자번호</span> 23-03-04
              </Text>
              <Text grey>
                <span>직업정보제공사업 신고번호</span> 2023-인천-0304
              </Text>
              <Text grey>
                <span>주소</span> 서울특별시 강남구 역삼1동 논현로 425
                (스파르타코딩클럽)
              </Text>
              <Text grey>
                <span>전화</span> 7777-7777 | <span>고객문의</span>{' '}
                hanghae2Jo@gmail.com
              </Text>
            </InfomationContainer>
            <Inquire>
              <Anchor bold grey url='mailto:hanghae2Jo@gmail.com'>
                제휴 문의
              </Anchor>
              <Anchor bold grey url='mailto:hanghae2Jo@gmail.com'>
                광고 문의
              </Anchor>
              <Anchor bold grey url='mailto:hanghae2Jo@gmail.com'>
                PR 문의
              </Anchor>
              <Anchor bold grey url='mailto:hanghae2Jo@gmail.com'>
                IR 문의
              </Anchor>
            </Inquire>
            <Security>
              <Anchor bold grey url='https://www.daangn.com/policy/terms'>
                이용약관
              </Anchor>
              <Anchor bold url='https://www.daangn.com/policy/privacy'>
                개인정보처리방침
              </Anchor>
              <Anchor bold grey url='https://www.daangn.com/policy/location'>
                위치기반서비스 이용약관
              </Anchor>
              <Anchor bold grey url='https://www.daangn.com/wv/faqs/3994'>
                이용자보호 비전과 계획
              </Anchor>
            </Security>
          </SecurityContainer>
          <IconContainer>
            <Anchor bold grey url='https://www.facebook.com/daangn'>
              <BsFacebook />
            </Anchor>
            <Anchor bold grey url='https://www.instagram.com/daangnmarket/'>
              <AiFillInstagram />
            </Anchor>
            <Anchor
              bold
              grey
              url='https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA'
            >
              <AiFillYoutube />
            </Anchor>
            <Anchor bold grey url='https://blog.naver.com/daangn'>
              <FaBlogger />
            </Anchor>
          </IconContainer>
        </SectionContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 33rem;
`;

const FooterContainer = styled.footer`
  width: 48rem;
  height: 33rem;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 2px solid #f1f3f6;
  gap: 10rem;
`;

const QuestionUrl = styled.div`
  p {
    margin: 0;
    padding-bottom: 2rem;
  }
`;

const DownLoadContainer = styled.div``;

const DownLoadBtn = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  gap: 1rem;
`;

const Apple = styled.span`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f1f3f6;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    opacity: 0.5;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }
`;

const Google = styled(Apple)`
  svg {
    font-size: 1.2rem;
  }
`;

const SecurityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inquire = styled.div`
  display: flex;
  gap: 1rem;
`;

const Security = styled.div`
  display: flex;
  gap: 1rem;
`;

const InfomationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  p {
    margin: 0.2rem 0;
  }

  span {
    font-weight: bold;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  gap: 1rem;
  font-size: 1.8rem;
`;

const SectionContainer = styled.div`
  display: flex;
`;
