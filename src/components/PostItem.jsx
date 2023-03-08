import React from 'react';
import styled from 'styled-components';
import Img from '../elements/Img';
import Text from '../elements/Text';

export default function PostItem({
  post: { thumbnailUrl, title, price, location, wishCount, chatCount },
  imgRegular,
}) {
  return (
    <ItemContainer>
      {imgRegular ? (
        <Img src={thumbnailUrl} largeRegular />
      ) : (
        <Img src={thumbnailUrl} medium />
      )}
      <Content>
        <Text bold>{title}</Text>
        <Text bold>{price}</Text>
        <Text>{location}</Text>
        <Text gery>{`관심${wishCount} ∙ 채팅${chatCount}`}</Text>
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
