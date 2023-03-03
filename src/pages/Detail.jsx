import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import styled, { css } from 'styled-components';
import Img from '../elements/Img';
import PostDetailImg from '../components/PostDetailImg';

const img = [
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/69cf19b2c2eb5e55fa5d041bf0f87fcb71c1c9763e8f6bcef92a71d5d96a6022.webp?q=95&s=1440x1440&t=inside',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/913f839531b16c5dc455d96c3f3b686181fd30c589bc8b717331ded7f0a83b59.webp?q=95&s=1440x1440&t=inside',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/00b1266453f6c8766a2d90b469e19b8578d98a7b1816c071bda01960f24b2b90.webp?q=95&s=1440x1440&t=inside',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/913f839531b16c5dc455d96c3f3b686181fd30c589bc8b717331ded7f0a83b59.webp?q=95&s=1440x1440&t=inside',
];

export default function Detail({ detail }) {
  return (
    <DetailWrapper>
      <PostDetailImg img={img} />
    </DetailWrapper>
  );
}

const DetailWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
