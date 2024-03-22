import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './asLoader-styles'

const ASLoader = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size='large' />
    </View>
  )
}

export default ASLoader