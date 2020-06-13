import React from 'react';
import { Container, MvpBasicInfoItem, Info, Title } from './styles';
import { mvpDataStrings } from '../../constants/mvpDataToSring';

const MvpBasicInfo = stats => {
  return (
    <Container>
      <MvpBasicInfoItem>
        <Title>level - </Title>
        <Info>{stats.level}</Info>
      </MvpBasicInfoItem>
      <MvpBasicInfoItem>
        <Title>race - </Title>
        <Info>{mvpDataStrings.race[stats.race]}</Info>
      </MvpBasicInfoItem>
      <MvpBasicInfoItem>
        <Title>scale - </Title>
        <Info>{mvpDataStrings.scale[stats.scale]}</Info>
      </MvpBasicInfoItem>
    </Container>
  );
};

export default MvpBasicInfo;
