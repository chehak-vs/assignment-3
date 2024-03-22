import React from 'react';
import {View, Text} from 'react-native';

import {MenuIcon, UserIcon} from '../../assets';

import styles from './asHeader-styles';
import { SPACING } from '../../theme';

interface ASHeaderProps {
  title: string;
}

const ASHeader = (props: ASHeaderProps) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <MenuIcon style={{marginLeft: SPACING.space_14}} />
      <Text style={styles.title}>{title}</Text>
      <UserIcon style={{marginRight: SPACING.space_14}} />
    </View>
  );
};

export default ASHeader;
