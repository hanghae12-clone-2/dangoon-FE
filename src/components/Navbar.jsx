import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Text from '../elements/Text';
import logo from '../styles/logo';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [keyWord, setKeyWord] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!keyWord) return;
    navigate(`/search/${keyWord}`);
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
          <Button small type='button'>
            로그인
          </Button>
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
`;
