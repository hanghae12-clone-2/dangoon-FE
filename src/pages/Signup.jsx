import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../api/axios';
import { useState } from 'react';
import styled from 'styled-components';
import QUERY from '../constants/query';
import ROUTER from '../constants/router';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickname] = useState('');
  const axios = new Axios(QUERY.AXIOS_PATH.SEVER);
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    axios
      .post(QUERY.AXIOS_PATH.SGIN_UP, {
        username,
        password,
        nickName,
      })
      .then(() => navigate(ROUTER.PATH.LOGIN));
  };

  return (
    <LoginContainer>
      <Form onSubmit={onSubmit}>
        <Label htmlFor='username'>아이디</Label>
        <Input
          type='text'
          id='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Label htmlFor='password'>비밀번호</Label>
        <Input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Label htmlFor='nickName'>닉네임</Label>
        <Input
          type='text'
          id='nickName'
          value={nickName}
          onChange={e => setNickname(e.target.value)}
        />
        <Button type='submit'>회원가입</Button>
      </Form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid rgb(255, 239, 100);
`;

const Label = styled.label`
  font-size: 18px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 8px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 8px;
  background-color: #9ccc00;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a37d00;
  }
`;
