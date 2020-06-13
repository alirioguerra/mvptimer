import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Filter from '~/components/Filter';
import { Container, Item } from './styles';
import { IDs } from '~/constants/mvpsID';
import { api } from '~/services/api';
import MvpHeader from '~/components/MvpHeader/index';
import Button from '~/components/Button/index';

const MvpList = ({ navigation, mvps, setMvps }) => {
  const [loading, setLoading] = useState(false);
  const handleAllMvps = () => {
    setLoading(true);
    Promise.all(
      IDs.map(id =>
        api
          .get(`/Monster/${id}?apiKey=0009fbb697698892ae2b3cd2af9365ab`)
          .then(({ data }) => data),
      ),
    )
      .then(data => setMvps(data))
      .finally(() => setLoading(false));
  };

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

const mapStateToProps = state => ({
  mvps: state.mvps,
});

const mapDispatchToProps = dispatch => ({
  setMvps: mvps => dispatch({ type: 'ALL_MVPS', mvps }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MvpList);
