import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ onClick, type, like, ...props }) => {
  if (like) return <LikeBtn {...props} onClick={onClick} type={type} />;
  return <BtnBx {...props} onClick={onClick} type={type} />;
};

Button.defaultProps = {
  width: '120px;',
  height: '40px;',
  backgroundColor: `${props => props.theme.color.white}`,
  color: `${props => props.theme.color.black}`,
};

const BtnBx = styled.button`
  ${props =>
    props.disabled &&
    css`
      background-color: #ddd !important;
      cursor: not-allowed !important;
    `}
  ${props =>
    props.full
      ? css`
          width: 100%;
        `
      : `width: ${props.width}`};
  ${props =>
    props.large
      ? css`
          width: 200px;
          height: 50px;
        `
      : `width: ${props.width}`};
  ${props =>
    props.small
      ? css`
          width: 100px;
        `
      : `width: ${props.width}`};
  ${props =>
    props.outline &&
    css`
      box-shadow: 0px 0px 5px 7px #e7413373;
      background-color: ${props => props.theme.color.white};
      color: ${props => props.theme.color.black};
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 5px 3px #e7413373;
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
      }
    `};

  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
`;

const LikeBtn = styled.button`
  /* padding: 0 10px 0 10px; */
  border-radius: 10px;
  box-shadow: 0px 0px 5px 7px #e7413373;
  background-color: #e74133;
  color: white;
  font-size: 17px;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 1rem;

  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;

  :hover {
    background-color: #f54d3e;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 5px 3px #e7413373;
  }

  ::before {
    content: '';
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzc2LjMyIDU1Mi4zYy0wLjM4NjcyIDAtMC43ODEyNS0wLjAxNTYyNS0xLjE3MTktMC4wNTA3ODEtMS4wNzgxLTAuMDc0MjE5LTIuMTM2Ny0wLjI2NTYyLTMuMTU2Mi0wLjU0Njg4LTIuNzMwNS0wLjU5Mzc1LTUuMjkzLTEuODUxNi03LjM0MzgtMy43ODEybC0xMzcuNTQtMTI5LjY2Yy00NC40NTMtNDEuOTAyLTQ5LjQ4LTExNS40Ni0xMS4yMTUtMTYzLjk3IDE5LjA4Mi0yNC4xODQgNDUuNzctMzguNjk1IDc1LjE1Mi00MC44NTUgMjguOTMtMi4xMTcyIDU2Ljg2MyA4LjAzMTIgNzguNjggMjguNTk4bDYuMjY1NiA1LjkwMjMgNi4yNjU2LTUuOTAyM2MyMS44MzItMjAuNTcgNDkuODA1LTMwLjY5MSA3OC42OTEtMjguNTk4IDI5LjM4MyAyLjE2NDEgNTYuMDY2IDE2LjY3NiA3NS4xNDUgNDAuODU1IDM4LjI2MiA0OC41MTIgMzMuMjM0IDEyMi4wNy0xMS4yMTUgMTYzLjk3bC0xMzcuNTQgMTI5LjY3Yy0yLjk5MjIgMi44MTY0LTYuOTM3NSA0LjM3NS0xMS4wMjMgNC4zNzV6bS03Ny44MTItMzA3LjAxYy0xLjY5NTMgMC0zLjM5NDUgMC4wNjI1LTUuMTAxNiAwLjE4NzUtMjAuMjgxIDEuNDk2MS0zOC44NTIgMTEuNjkxLTUyLjI4MSAyOC43MTEtMjguMjE1IDM1Ljc3My0yNC42MTMgODkuOTEgOC4wMjczIDEyMC42OGwxMjYuODQgMTE5LjU5IDEyNi44NC0xMTkuNTljMzIuNjQ1LTMwLjc3MyAzNi4yNDYtODQuOTEgOC4wMjczLTEyMC42OC0xMy40MjItMTcuMDItMzEuOTg0LTI3LjIxNS01Mi4yNy0yOC43MTEtMTkuODI4LTEuNDY0OC0zOS4xMDUgNS42MjExLTU0LjI4NSAxOS45MzRsLTE3LjI4NSAxNi4yOTNjLTYuMTk1MyA1LjgzOTgtMTUuODU5IDUuODM5OC0yMi4wNDcgMGwtMTcuMjg1LTE2LjI5M2MtMTMuODcxLTEzLjA3OC0zMS4xNzYtMjAuMTE3LTQ5LjE4LTIwLjExN3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==');
    background-size: 100%;
    background-repeat: no-repeat;
    color: transparent;
    position: relative;
    width: 40px;
    height: 40px;
    display: block;
    transition: all 0.6s ease-in-out;
  }

  :hover:before {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzY5Ljg0IDU1MC4yOGMwLjQ3MjY2IDAuNDcyNjYgMC45NDUzMSAwLjQ3MjY2IDAuOTQ1MzEgMC45NDUzMSA2NS4zNTUtNTEuNjIxIDE5My43LTE0OC4yMyAxOTMuNy0yNDkuMTEgMC01NS44ODMtNDUuNDY1LTEwMS4zNS0xMDEuMzUtMTAxLjM1LTM5Ljc4MSAwLTc0LjM1MiAyMy4yMDctOTAuOTI2IDU2LjgyOC0wLjQ3MjY2IDAuOTQ1MzEtMS40MjE5IDMuMzE2NC0xLjQyMTkgMy4zMTY0cy0wLjk0NTMxLTEuODk0NS0wLjk0NTMxLTIuMzY3MmMtMTYuMTAyLTM0LjA5LTUwLjY3Mi01Ny43Ny05MC45MjYtNTcuNzctNTUuODgzIDAtMTAxLjM1IDQ1LjQ2MS0xMDEuMzUgMTAxLjM0IDAgMTAxLjgyIDEyNy44NyAxOTcuMDEgMTkyLjI3IDI0OC4xNnoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==');
    transition: all 0.6s ease-in-out;
    transform: rotate(-1turn);
  }
`;

export default Button;