import {View, Text} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {Bell, Pie} from '../../assets';
import styles from './asMapCard-styles';
import CircularProgress from 'react-native-circular-progress-indicator';

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
