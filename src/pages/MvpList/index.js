import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Filter from '~/components/Filter';
import { Container, Item } from './styles';
import { IDs } from '~/constants/mvpsID';
import { api } from '~/services/api';
import { getRealm } from '~/services/realm';
import MvpHeader from '~/components/MvpHeader/index';
import Button from '~/components/Button/index';

const MvpList = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [mvps, setMvps] = useState([]);

  const saveMVP = async mvp => {
    const data = {
      id: mvp.id,
      name: mvp.name,
      level: mvp.stats.level,
      health: mvp.stats.health,
      sp: mvp.stats.sp,
      str: mvp.stats.str,
      int: mvp.stats.int,
      vit: mvp.stats.vit,
      dex: mvp.stats.dex,
      agi: mvp.stats.agi,
      luk: mvp.stats.luk,
      element: mvp.stats.element,
      scale: mvp.stats.scale,
      race: mvp.stats.race,
      flee: mvp.stats.flee,
      class: mvp.stats.class,
      attr: mvp.stats.attr,
      spawn: [
        {
          mapname: mvp.spawn.mapname,
          amount: mvp.spawn.amount,
          respawnTime: mvp.spawn.respawnTime,
        },
      ],
      neutral: mvp.propertyTable['0'],
      water: mvp.propertyTable['1'],
      earth: mvp.propertyTable['2'],
      fire: mvp.propertyTable['3'],
      wind: mvp.propertyTable['4'],
      poison: mvp.propertyTable['5'],
      holy: mvp.propertyTable['6'],
      dark: mvp.propertyTable['7'],
      ghost: mvp.propertyTable['8'],
      undead: mvp.propertyTable['9'],
    };
    const realm = await getRealm();

    realm.write(() => {
      realm.create('MVP', data);
    });
  };

  const handleAllMvps = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        '/Monster/1059?apiKey=0009fbb697698892ae2b3cd2af9365ab',
      );
      await saveMVP(response.data);

      setLoading(false);
    } catch (err) {
      console.tron.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadMvps = async () => {
      const realm = await getRealm();
      const data = realm.objects('MVP').sorted('name', true);

      setMvps(data);
    };
    loadMvps();
  }, []);

  return (
    <Container>
      {mvps.length <= 0 ? (
        <Button
          disabled={loading}
          onPress={() => handleAllMvps()}
          title={loading ? 'loading...' : 'load mvp list'}
        />
      ) : (
        <>
          <Filter />
          <FlatList
            keyExtractor={item => item.dbname}
            data={mvps}
            renderItem={({ item }) => (
              <Item
                onPress={() =>
                  navigation.navigate('MvpDetails', { id: item.id })
                }>
                <MvpHeader {...item} />
              </Item>
            )}
          />
        </>
      )}
    </Container>
  );
};

export default MvpList;
