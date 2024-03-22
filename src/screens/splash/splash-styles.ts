import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface ISplashStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  descriptionContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

const styles: ISplashStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    justifyContent: 'space-around',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.space_100,
  },
  descriptionContainer: {
    alignItems: 'center',
    flex: 1/2,
    justifyContent: 'flex-end',
  },
  title: {
    color: COLORS.secondary[700],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    marginTop: SPACING.space_32,
    textAlign: 'center',
  },
  description: {
    color: COLORS.primary[300],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_18,
    textAlign: 'center',
  },
});

export default styles;
