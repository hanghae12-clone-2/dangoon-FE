import React from 'react';
import styled from 'styled-components';
import Img from '../../elements/Img';
import Text from '../../elements/Text';

import { FaUserCircle } from 'react-icons/fa';

export default function MessengerList({ list }) {
  return (
    <MessegeListContainer>
      <ListTitleContainer>
        <Text large_regular>{'nickname'}</Text>
      </ListTitleContainer>
      <MessegeList>
        {list.map(v => (
          <Li>
            <ContentContainer>
              <Text large_medium>
                <FaUserCircle />
              </Text>
              <Information>
                <Title>
                  <Text small>
                    <span>성인</span>
                    {`${'부평'}`}
                  </Text>
                </Title>
                <Content>
                  <Text small>주말에 연락 드릴게요ddddd.....</Text>
                </Content>
              </Information>
            </ContentContainer>
            <Img
              src={
                'https://dnvefa72aowie.cloudfront.net/origin/article/202303/69cf19b2c2eb5e55fa5d041bf0f87fcb71c1c9763e8f6bcef92a71d5d96a6022.webp?q=95&s=1440x1440&t=inside'
              }
              small
            />
          </Li>
        ))}
      </MessegeList>
    </MessegeListContainer>
  );
}

const MessegeListContainer = styled.div`
  width: 35rem;
  height: 90%;
`;

const ListTitleContainer = styled.ul`
  width: 100%;
  height: 10%;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${props => props.theme.color.light_messenger};
`;

const MessegeList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.color.light_messenger};
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.color.light_messenger};
  }

  svg {
    color: ${props => props.theme.color.messenger};
  }

  p {
    margin: 0.2rem;
  }

  span {
    font-weight: ${props => props.theme.fontWeight.bold};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Information = styled.div``;

const Title = styled.div`
  display: -webkit-box;

  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Content = styled(Title)``;
