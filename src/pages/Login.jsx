import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/modules/loginSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Axios from "../utils/api/axios";
import Storage from "../utils/localStorage";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const axios = new Axios("http://13.209.11.12");
  //cosnt 있는 부분에 배치시켜라 
// Axios 인스턴스를 생성


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Axios 인스턴스를 생성
      
      // 로그인 API 요청을 보내고 응답을 받아옴
      const response = await axios.post("/api/users/login", {
        username,
        password,
      });
      // API 요청이 성공적으로 처리되면, 응답에서 받아온 토큰을 쿠키에 저장
      // 이후 다른 페이지에서 인증된 API 요청을 보낼 때, 해당 쿠키를 헤더에 포함시켜 전송
      console.log(response); // 서버로부터 받아온 데이터를 출력

    
      const onUsername= Storage.getUserName();
      console.log(onUsername);
      //로그인이 되있는 안되있는지(토큰을 가져오는거니까)
      // dispatch(isLogin());
      navigate("/");
    } catch (error) {
      console.error(error);
      // 예외 처리: 로그인에 실패한 경우 에러 메시지 출력
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };
 

 return (
    <LoginContainer>
    <Form onSubmit={onSubmit}>
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








