import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QUERY from '../constants/query';
import ROUTER from '../constants/router';
import Input from '../elements/Input';
import Axios from '../api/axios';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();
  const axios = new Axios(QUERY.AXIOS_PATH.SEVER);

  const onSubmit = async e => {
    e.preventDefault();

    axios
      .post(QUERY.AXIOS_PATH.LOGIN, {
        userName,
        passWord,
      })
      .then(() => navigate(ROUTER.PATH.MAIN));
  };

  return (
    <LoginContainer>
      <Form onSubmit={onSubmit}>
        <Label htmlFor='userName'>아이디</Label>
        <Input
          type='text'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <Label htmlFor='passWord'>비밀번호</Label>
        <Input
          type='passWord'
          value={passWord}
          onChange={e => setPassWord(e.target.value)}
        />
        <Button type='submit'>로그인</Button>
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

// const Input = styled.input`
//   font-size: 18px;
//   padding: 8px;
// `;

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
