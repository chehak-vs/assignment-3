import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {SPACING, Typography, COLORS} from '../../theme';

interface IASHeaderStyles {
  container: ViewStyle;
  title: TextStyle;
  iconLeft: ViewStyle;
  iconRight: ViewStyle;
}

const styles : IASHeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.space_12,
  },
  title: {
    color: COLORS.primary[400],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    lineHeight: SPACING.space_21,
    textAlign: 'center',
  },
  iconLeft: {
    paddingLeft: SPACING.space_14,
  },
  iconRight: {
    paddingRight: SPACING.space_14,
  },
});

export default styles;
