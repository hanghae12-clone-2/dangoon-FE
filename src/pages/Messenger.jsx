import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import Text from '../elements/Text';

export default function Messenger() {
  const messege = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <MessengerWrapper>
      <NavbarContainer>
        <FaUserCircle />
      </NavbarContainer>
      <MessegeListContainer>
        <ListTitleContainer>
          <Text medium>{'nickname'}</Text>
        </ListTitleContainer>
        <MessengerListContainer>
          {messege.map(v => (
            <Li>
              <Text large_medium>
                <FaUserCircle />
              </Text>
            </Li>
          ))}
        </MessengerListContainer>
      </MessegeListContainer>
      <MessegeContainer></MessegeContainer>
    </MessengerWrapper>
  );
}

const MessengerWrapper = styled.section`
  display: flex;
  width: 70rem;
  height: 100%;
  margin: auto;
  animation: enlargement 300ms 1;
  @keyframes enlargement {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`;

const NavbarContainer = styled.div`
  width: 7rem;
  height: 100%;
  color: ${props => props.theme.color.messenger};
  background-color: ${props => props.theme.color.light_messenger};
  padding: 2rem 0;
  font-size: ${props => props.theme.fontSize.large};
  text-align: center;

  svg {
    border: 2px solid ${props => props.theme.color.carrot_orange};
    border-radius: 50%;
  }
`;

const MessegeListContainer = styled.div`
  width: 35rem;
  height: 100%;
`;

const ListTitleContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  border-bottom: 2px solid ${props => props.theme.color.light_messenger};
`;

const MessengerListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Li = styled.li`
  border-bottom: 2px solid ${props => props.theme.color.light_messenger};
  padding: 0 1rem;
  svg {
    color: ${props => props.theme.color.messenger};
  }
`;

const MessegeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: bisque;
`;
