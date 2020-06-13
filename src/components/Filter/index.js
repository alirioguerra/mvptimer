import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, ButtonContainer } from './styles';

const Filter = ({ sortMvpsByName }) => {
  return (
    <Container>
      <ButtonContainer>
        <Button onPress={() => sortMvpsByName()}>
          <Text>name</Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  sortMvpsByName: () => dispatch({ type: 'SORT_MVPS' }),
});

export default connect(
  null,
  mapDispatchToProps,
)(Filter);
