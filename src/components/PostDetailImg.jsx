import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import Img from '../elements/Img';

export default function PostDetailImg({ img }) {
  const [imgPage, setImgPage] = useState(0);

  const handleImgNext = () =>
    setImgPage(state => (Math.abs(state) === img.length - 1 ? 0 : state - 1));

  const handleImgPrevious = () =>
    setImgPage(state => (Math.abs(state) === 0 ? 1 - img.length : state + 1));

  const handleDotClick = index => setImgPage(-index);

  return (
    <ImgContainer>
      {img.map(url => (
        <Imgs key={uuidv4()} imgPage={imgPage}>
          <Img large src={url} />
        </Imgs>
      ))}
      <ArrowContainer>
        <Arrow onClick={handleImgPrevious}>
          <AiOutlineArrowLeft />
        </Arrow>
        <Arrow onClick={handleImgNext}>
          <AiOutlineArrowRight />
        </Arrow>
      </ArrowContainer>
      <Dots pageNum={imgPage * -1 + 1}>
        {img.map((_, index) => (
          <Dot key={uuidv4()} onClick={() => handleDotClick(index)} />
        ))}
      </Dots>
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  position: absolute;
  left: calc(50% - 20rem);
  display: flex;
  width: 40rem;
  height: 40rem;
  overflow: hidden;
  transition: all 300ms ease-in-out;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Arrow = styled.div`
  color: ${props => props.theme.color.carrot_orange};
  font-size: ${props => props.theme.fontSize.large};
  :hover {
    color: ${props => props.theme.color.grey};
  }
`;

const Imgs = styled.div`
  transform: translateX(calc(40rem * ${props => props.imgPage}));
  transition: all 300ms ease;
`;

const Dots = styled.ul`
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;

  li:nth-child(${props => props.pageNum}) {
    background-color: ${props => props.theme.color.grey};
  }
`;

const Dot = styled.li`
  width: 10px;
  height: 10px;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.theme.color.carrot_orange};
  :hover {
    transform: scale(1.3);
  }
`;
