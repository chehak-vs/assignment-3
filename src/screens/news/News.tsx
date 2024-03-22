import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

import { ASHeader } from '../../components';

import { NEWS_WEB_URL } from '../../constants';

import styles from './news-styles';

const News = () => {
  return (
    <View style={styles.container}>
      <ASHeader title= 'News' />
      <WebView source={{ uri: NEWS_WEB_URL }} />
    </View>
  );
}

export default News;
