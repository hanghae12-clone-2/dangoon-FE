import React from 'react';
import styled from 'styled-components';
import Img from '../elements/Img';
import Text from '../elements/Text';

export default function PostItem({
  post: { img, title, money, address, like, chat },
}) {
  return (
    <ItemContainer>
      <Img src={img} medium />
      <Content>
        <Text bold>{title}</Text>
        <Text bold>{money}</Text>
        <Text>{address}</Text>
        <Text gery>{`${like} ∙ ${chat}`}</Text>
      </Content>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Content = styled.div``;
