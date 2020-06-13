import React from 'react';
import { ButtonWrapper, Title } from './styles';

const Button = props => {
  return (
    <ButtonWrapper {...props}>
      <Title>{props.title}</Title>
    </ButtonWrapper>
  );
};

export default Button;
