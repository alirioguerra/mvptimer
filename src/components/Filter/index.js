import React from 'react';
import { Text } from 'react-native';
import { Container, Button, ButtonContainer } from './styles';

const Filter = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button>
          <Text>name</Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filter;
