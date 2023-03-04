import React from 'react';
import styled from 'styled-components';
import Anchor from '../elements/Anchor';
import Button from '../elements/Button';

export default function PostScrollEnd() {
  return (
    <PostScrollEndContainer>
      <h2>서울특별시 마켓을 더 구경하고 싶나요?</h2>
      <p>당근마켓 앱에서 따뜻한 거래를 직접 경험해보세요!</p>
      <ButtonContainer>
        <Anchor url='https://apps.apple.com/kr/app/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%ED%95%84%EC%88%98%EC%95%B1/id1018769995'>
          <Button>App Store</Button>
        </Anchor>
        <Anchor url='https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko'>
          <Button>Google Play</Button>
        </Anchor>
      </ButtonContainer>
    </PostScrollEndContainer>
  );
}

const PostScrollEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  margin-top: 10rem;
  background-color: #f8f9fa;

  h2 {
    margin: 3rem 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 24rem;
  gap: 1rem;

  button {
    width: 10rem;
    margin: 0.5rem;
    padding: 1rem;
    color: ${props => props.theme.color.white};
    background-color: #ff893d;
    font-size: 1.2rem;
  }
`;
