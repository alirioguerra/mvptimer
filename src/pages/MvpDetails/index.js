import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import { api } from '~/services/api';
import Loading from '~/components/Loading';
import { Container } from './styles';
import MvpHeader from '~/components/MvpHeader';

const MvpDetails = ({ route }) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  const handleMvp = useCallback(async id => {
    try {
      const { data } = await api.get(
        `/Monster/${id}?apiKey=0009fbb697698892ae2b3cd2af9365ab`,
      );
      await setState(prevState => ({
        ...prevState,
        data,
        loading: false,
      }));
    } catch {}
  }, []);

  useEffect(() => {
    handleMvp(route.params.id);
  }, [handleMvp, route.params.id]);

  return (
    <Container>
      {!state.loading ? (
        <View>
          <MvpHeader {...state.data} />
        </View>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default MvpDetails;
