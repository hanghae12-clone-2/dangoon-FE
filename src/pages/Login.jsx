import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QUERY from '../constants/query';
import ROUTER from '../constants/router';
import Axios from '../api/axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const axios = new Axios(QUERY.AXIOS_PATH.SEVER);

  const onSubmit = async e => {
    e.preventDefault();
    await axios
      .post(QUERY.AXIOS_PATH.LOGIN, {
        username,
        password,
      })
      .then(() => navigate(ROUTER.PATH.MAIN));
  };

  return (
    <LoginContainer>
    <Form onSubmit={onSubmit}>
      <Titleheader>🥕 로그인을 해주세요</Titleheader>
      <Label htmlFor="username">아이디</Label>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Label htmlFor="password">비밀번호</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">로그인</Button>
    </Form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f7f7f7; 
  font-family: 'Nanum Gothic', sans-serif;
`;

const Titleheader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
  padding: 60px; 
  border-radius: 8px; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); 
  background-color: #fff; 
  font-family: "Noto Sans KR", sans-serif;
`;

const Label = styled.label`
  font-size: 18px;
  color: #212529; 
`;

const Input = styled.input`
  font-size: 18px;
  padding: 12px; 
  border: 1px solid #dee2e6; 
  border-radius: 8px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 12px; 
  background-color: #ff922b;
  color: #fff; 
  border: none;
  border-radius: 8px;
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s; 

  &:hover {
    background-color: #ffad6d; 
  }
`;









