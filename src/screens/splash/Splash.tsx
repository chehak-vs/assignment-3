import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {SplashImg} from '../../assets';

import styles from './splash-styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style = {styles.titleContainer}>
        <SplashImg />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      <View style = {styles.descriptionContainer}>
        <Text style={styles.description}>
          © Copyright COVSTATS 2020. All rights reserved
        </Text>
      </View>
    </View>
  );
};

export default Splash;
