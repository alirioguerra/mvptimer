import styled from 'styled-components';
import { colors } from '~/constants/colors';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.grey};
  margin: 8px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 5px;
`;
