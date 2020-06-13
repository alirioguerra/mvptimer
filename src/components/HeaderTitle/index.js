import React from 'react';
import { Container, Title, SubTitle } from './styles';

const HeaderTitle = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default HeaderTitle;
