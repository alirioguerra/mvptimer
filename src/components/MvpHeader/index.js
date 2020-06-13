import React from 'react';
import MvpBasicInfo from '~/components/MvpBasicInfo';
import { Container, MvpData, MvpSprite, Id, Name, Hp } from './styles';

const MvpHeader = data => {
  return (
    <Container>
      <MvpSprite
        resizeMode="contain"
        source={{
          uri: `https://static.divine-pride.net/images/mobs/png/${data.id}.png`,
        }}
      />
      <MvpData>
        <Id>#{data.id}</Id>
        <Name>{data.name}</Name>
        <Hp>
          hp -{' '}
          {data.stats.health.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </Hp>
        <MvpBasicInfo {...data.stats} />
      </MvpData>
    </Container>
  );
};

export default MvpHeader;
