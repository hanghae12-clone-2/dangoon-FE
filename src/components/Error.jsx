import React from 'react';
import styled from 'styled-components';

export default function Error() {
  return (
    <LodingContainer>❌ 게시물 로딩중 에러가 발생했습니다. ❌</LodingContainer>
  );
}

const LodingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;
