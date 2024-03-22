import React from 'react';
import {View, Text} from 'react-native';

import {AffectedRegeions, LessAffected, MostAffected} from '../../assets';

import styles from './asMapAffectedAreas-styles';

const ASMapAffectedAreas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Covid-19 Affected Areas</Text>
      <View style={styles.detailContainer}>
        <MostAffected style={styles.icon} />
        <Text style={styles.subTitle}>Most Affected</Text>
        <LessAffected style={styles.icon} />
        <Text style={styles.subTitle}>Less Affected</Text>
      </View>
      <AffectedRegeions style={styles.image} />
    </View>
  );
};

export default ASMapAffectedAreas;
