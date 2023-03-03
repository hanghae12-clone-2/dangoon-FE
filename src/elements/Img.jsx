import React from 'react';
import styled, { css } from 'styled-components';

export default function Img({ src, ...props }) {
  return <ImgStyle {...props} src={src} />;
}

const ImgStyle = styled.img`
  width: 40rem;
  height: 50rem;
  border-radius: ${props => props.theme.borderRadius.small};
  ${props =>
    props.small &&
    css`
      width: 3rem;
      height: 3rem;
    `}

  ${props =>
    props.medium &&
    css`
      width: 15rem;
      height: 15rem;
    `}
`;
