import styled from 'styled-components';
import { colors } from '~/constants/colors';

export const Container = styled.View`
  margin: 8px 16px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;
export const Button = styled.TouchableOpacity`
  padding: 6px 12px;
  background-color: ${colors.grey};
  border-radius: 5px;
  margin: 0 16px 0 0;
`;
