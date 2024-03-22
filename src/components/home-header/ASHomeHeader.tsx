import React from 'react'
import { View, Text } from 'react-native'

import { LeftIcon, RightIcon } from '../../assets'

import styles from './asHomeHeader-styles'

interface IASHomeHeaderProps {
  renderPrevPage: () => void;
  renderNextPage: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

const ASHomeHeader = (props: IASHomeHeaderProps) => {
  const {renderPrevPage, renderNextPage, isPrevDisabled, isNextDisabled} = props
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Live Reports</Text>
        <Text style={styles.subTitle}>Top Countries</Text>
      </View>
      <View style={styles.iconContainer}>
        <LeftIcon style={styles.icon} onPress={renderPrevPage} disabled={isPrevDisabled}/>
        <RightIcon style={styles.icon} onPress={renderNextPage} disabled={isNextDisabled} />
      </View>
    </View>
  )
}

export default ASHomeHeader