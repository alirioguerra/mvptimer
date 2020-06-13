import React from 'react';
import { Container, LoaderSpin } from './styles';
import { colors } from '~/constants/colors';
export default function Loading() {
  return (
    <Container>
      <LoaderSpin size="large" color={colors.primary} />
    </Container>
  );
}
