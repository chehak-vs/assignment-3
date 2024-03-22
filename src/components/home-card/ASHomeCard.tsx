import React from 'react';
import {View, Text, Image} from 'react-native';

import {DownIcon} from '../../assets';

import styles from './asHomeCard-styles';

interface ASHomeCardProps {
  countryInfo: {};
  flag: string;
  country: string;
  active: string;
}

const ASHomeCard = (props: ASHomeCardProps) => {
  const {countryInfo, flag, country, active} = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={{uri: flag}} style={styles.image} />
        
        <Text style={styles.title} numberOfLines={2}>{country}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>{active}</Text>
        <DownIcon style={styles.icon} />
      </View>
    </View>
  );
};

export default ASHomeCard;
