import {View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

import { ASHeader } from '../../components';

import { EDUCATION_WEB_URL } from '../../constants';

import styles from './education-styles';

const Education = () => {
  return (
    <View style={styles.container}>
      <ASHeader title='Education' />
      <WebView
        source={{
          uri: EDUCATION_WEB_URL,
        }}
        style={styles.subContainer}
      />
    </View>
  );
};

export default Education;
