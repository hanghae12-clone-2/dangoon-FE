import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';

export default function Footer() {
  return (
    <FooterContainer>
      <Infomation>
        <Text>자주 묻는 질문</Text>
        <Text>회사 소개</Text>
        <Text>인재 채용</Text>
      </Infomation>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 33rem;
  margin: auto;
  background-color: aqua;
`;

const DownLoad = styled.div``;

const Infomation = styled.div``;
