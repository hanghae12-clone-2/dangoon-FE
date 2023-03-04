import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const Input = props => {
  const {
    hei,
    type,
    label,
    placeholder,
    multiLine,
    inLineLabel,
    onChange,
    value,
  } = props;

  if (multiLine) {
    return (
      <React.Fragment>
        {label && <Text margin='20px 5px 10px 0'>{label}</Text>}
        <TextArea
          placeholder={placeholder}
          rows={20}
          onChange={onChange}
          value={value}
        />
      </React.Fragment>
    );
  }
  if (inLineLabel) {
    return (
      <InLineContainer>
        <NormalInput
          hei={hei}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {label && <Text>{label}</Text>}
      </InLineContainer>
    );
  }

  return (
    <React.Fragment>
      <NormalInput
        hei={hei}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {label && <Text>{label}</Text>}
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  type: 'text',
  placeholder: '',
  multiLine: false,
  _onChange: () => {},
  _onKeyPress: () => {},
};

const NormalInput = styled.input`
  height: ${props => props.hei};
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  width: 100%;
  padding: 8px 8px;
  box-sizing: border-box;
  display: block;
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.carrot_orange};
  }
`;

const InLineContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  input {
    padding-right: 2rem;
  }

  p {
    position: absolute;
    right: 0;
    font-size: 1.3rem;
    transform: translate(-0.3rem);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  width: 100%;
  padding: 8px 8px;
  box-sizing: border-box;
  resize: none;
  overflow: auto;
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.carrot_orange};
  }
`;

export default Input;
