import styled from 'styled-components';
import { colors } from '~/constants/colors';

export const ButtonWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${props =>
    !props.secondary ? colors.primary : colors.secondary};
  padding: 10px;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  border-radius: 5px;
  align-self: stretch;
  margin: 8px 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Signika-SemiBold';
  font-size: 22px;
  text-align: center;
`;
