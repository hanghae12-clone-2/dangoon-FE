import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <MainWrapper>
      <FirstContainer></FirstContainer>
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const FirstContainer = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: ${props => props.theme.color.light_orange};
`;

const SecondContainer = styled(FirstContainer)`
  background-color: ${props => props.theme.color.white};
`;

const ThirdContainer = styled(FirstContainer)`
  background-color: ${props => props.theme.color.melon};
`;

const FourthContainer = styled(FirstContainer)`
  background-color: ${props => props.theme.color.white};
`;

const Comment = styled.div``;
