import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IOnBoardingStyles {
  imageContainer: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  dotsView: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const styles: IOnBoardingStyles = StyleSheet.create({
  imageContainer: {
    elevation: SPACING.space_10,
    shadowColor: COLORS.tertiary[700],
    shadowOffset: {
      width: SPACING.space_0,
      height: SPACING.space_4,
    },
    shadowOpacity: SPACING.space_1,
    shadowRadius: SPACING.space_8,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_400,
  },
  title: {
    color: COLORS.primary[700],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    textAlign: 'center',
  },
  subTitle: {
    color: COLORS.tertiary[700],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
    marginBottom: SPACING.space_122,
    marginHorizontal: SPACING.space_24,
    marginTop: SPACING.space_14,
    textAlign: 'center',
  },
  dotsView: {
    height: SPACING.space_4, 
    width: SPACING.space_4, 
    marginHorizontal: SPACING.space_4,
  }, 
  button: {
    backgroundColor: COLORS.white,
    padding: SPACING.space_10,
    borderRadius: SPACING.space_4,
    marginRight: 20,
  },
  buttonText: {
    color: COLORS.tertiary[700],
    fontStyle: 'italic',
  },
});

export default styles;
