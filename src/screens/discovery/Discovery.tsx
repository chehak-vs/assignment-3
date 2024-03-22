import React from 'react'
import { View} from 'react-native'
import WebView from 'react-native-webview'

import { ASHeader } from '../../components'

import { DISCOVERY_WEB_URL } from '../../constants'

import styles from './discovery-styles'

const Discovery = () => {
  return (
    <View style={styles.container}>
      <ASHeader title='Discovery' />
      <WebView
        source={{ uri: DISCOVERY_WEB_URL }}
        style={styles.subContainer}
      />
    </View>
  )
}

export default Discovery