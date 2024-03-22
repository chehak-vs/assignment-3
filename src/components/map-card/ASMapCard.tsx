import React from 'react';
import {View, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import {Bell} from '../../assets';

import styles from './asMapCard-styles';

const ASMapCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CircularProgress
          value={60}
          radius={120}
          duration={2000}
          progressValueColor={'#ecf0f1'}
          maxValue={200}
          title={'KM/H'}
          titleColor={'white'}
          titleStyle={{fontWeight: 'bold'}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>China</Text>
          <Text style={styles.subTitle}>Affected - 21.5k</Text>
          <Text style={styles.subTitle}>Recovered - 80.5k</Text>
        </View>
      </View>
      <Bell />
    </View>
  );
};

export default ASMapCard;
