import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView} from 'react-native';

import {ASHeader, ASMapAffectedAreas} from '../../components';
import ASMapCard from '../../components/map-card/ASMapCard';
import fetchData from '../../services/api';

import styles from './map-styles';

const Map = () => {
  const [data, setData] = useState(null);
  let items = data ? data.slice(0, 3) : [];

  useEffect(() => {
    fetchData()
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error setting data:', error));
  }, []);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ASHeader title="World Wide Map" />
      <ASMapAffectedAreas />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Top Countries</Text>
        {items.map((item, index) => (
          <ASMapCard />
        ))}
      </View>
    </ScrollView>
  );
};

export default Map;
