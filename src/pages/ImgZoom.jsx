import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
import ROUTER from '../constants/router';

export default function ImgZoom() {
  const {
    state: { url },
  } = useLocation();

  return (
    <ImgZoomContainer>
      <Link to={ROUTER.PATH.BACK}>
        <RxCross1 />
      </Link>
      <Img srcImg={url} />
    </ImgZoomContainer>
  );
}

const ImgZoomContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1100;

  svg {
    position: absolute;
    top: 0;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    z-index: 2000;
    transform: translateX(22rem);
  }
`;

const Img = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 50rem;
  border: none !important;
  object-fit: cover;
  background-image: url(${props => props.srcImg});
  background-size: 100% 100%;
`;
