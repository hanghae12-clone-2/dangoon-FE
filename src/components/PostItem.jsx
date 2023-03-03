import React from 'react';
import styled from 'styled-components';
import Img from '../elements/Img';

export default function PostItem({
  post: { img, title, money, address, like, chat },
}) {
  return (
    <ItemContainer>
      <Img src={img} medium />
      <Content>
        <p>{title}</p>
        <p>{money}</p>
        <p>{address}</p>
        <span>{like}</span>
        <span>{chat}</span>
      </Content>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div``;
