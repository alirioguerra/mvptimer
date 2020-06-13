import styled from 'styled-components';
import { colors } from '~/constants/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
`;

export const MvpSprite = styled.Image`
  width: 60px;
  height: 100px;
  margin: 0 16px 0 0;
`;

export const Id = styled.Text`
  font-family: 'Signika-Light';
  color: ${colors.black};
`;
export const MvpData = styled.View`
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-family: 'Signika-SemiBold';
  font-size: 22px;
  color: ${colors.black};
`;

export const Hp = styled.Text`
  background-color: ${colors.poison};
  padding: 1px 4px;
  border-radius: 5px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
`;

export const InfoItem = styled.Text`
  margin: 0 16px 0 0;
`;
