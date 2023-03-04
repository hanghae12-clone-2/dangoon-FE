import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainInfo from '../components/MainIntro';
import MainPost from '../components/MainPost';
import ROUTER from '../constants/router';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <MainWrapper>
      <MainInfo />
      <MainPost />
      <LinkContainer>
        <Link to={ROUTER.PATH.HOT_ARTICLES}>인기매물 더 보기</Link>
      </LinkContainer>
      <Footer />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 18rem;
  padding-bottom: 1rem;
  background-color: ${props => props.theme.color.sky_white};
  font-size: ${props => props.theme.fontSize.medium};
  text-align: center;
`;
