import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Text from '../elements/Text';
import logo from '../styles/logo';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import ROUTER from '../constants/router';
import Storage from '../utils/localStorage';
import { removeCookie } from '../utils/cookie';
import QUERY from '../constants/query';

export default function Navbar() {
  const [keyWord, setKeyWord] = useState('');
  const [showMyMenu, setShowMyMenu] = useState(false);

  const navigate = useNavigate();
  const userName = Storage.getUserName();

  const handleSubmit = e => {
    e.preventDefault();
    if (!keyWord) return;
    navigate(`/search/${keyWord}`);
  };

  const handleShowMyMenu = () => {
    setShowMyMenu(state => !state);
  };

  const handleLogOut = () => {
    Storage.removeUserName();
    removeCookie(QUERY.COOKIE.COOKIE_NAME);
    setShowMyMenu(false);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoContainer>
          <Logo>{logo()}</Logo>
          <Text large_regular>중고거래</Text>
        </LogoContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            placeholder='물품이나 동네를 검색해 보세요.'
            inLineLabel
            label={<AiOutlineSearch />}
            value={keyWord}
            onChange={e => setKeyWord(e.target.value)}
          />
          {userName ? (
            <ShowMyMenuContainer>
              <Text large_medium>
                <FaUserCircle onClick={handleShowMyMenu} />
              </Text>
              {showMyMenu ? (
                <ShowMyMenu>
                  <span onClick={handleLogOut}>로그아웃</span>
                </ShowMyMenu>
              ) : (
                ''
              )}
            </ShowMyMenuContainer>
          ) : (
            <Link to={ROUTER.PATH.LOGIN}>
              <Button small type='button'>
                로그인
              </Button>
            </Link>
          )}
        </FormContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 42rem;
  background-color: ${props => props.theme.color.white};
  z-index: 1000;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  width: 100%;
  padding: 0 1rem;
`;

const LogoContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    color: ${props => props.theme.color.carrot_orange};
  }
`;

const Logo = styled.div`
  svg {
    width: 8rem;
    height: 5rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
  width: 100%;
  gap: 1rem;

  svg {
    color: ${props => props.theme.color.messenger};
    cursor: pointer;
  }
`;
const ShowMyMenuContainer = styled.div`
  position: relative;
`;

const ShowMyMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.color.messenger};
  border-radius: 0.5rem;
  background-color: ${props => props.theme.color.white};
  transform: translate(0, 4rem);
  z-index: 1000;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 1.5rem;
    padding: 1rem;
    border-bottom: none;
    cursor: pointer;

    :hover {
      background-color: ${props => props.theme.color.messenger};
    }
  }

  span:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.color.messenger};
  }
`;
