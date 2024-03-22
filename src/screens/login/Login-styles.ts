import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {SPACING, Typography, COLORS} from '../../theme';

interface ILoginStyles {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  subContainer: ViewStyle;
  subTitle: TextStyle;
  textInput: TextStyle;
  signInButton: ViewStyle;
  signInButtonText: TextStyle;
}

const styles : ILoginStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
  scrollContainer: {

  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.space_100,
    marginBottom: SPACING.space_52,
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    color: COLORS.secondary[700],
    textAlign: 'center',
    marginTop: SPACING.space_32,
  },
  subContainer: {
    marginHorizontal: SPACING.space_18,
  },
  subTitle: {
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    color: COLORS.primary[600],
    marginTop: SPACING.space_32,
    marginBottom: SPACING.space_4,
  },
  textInput: {
    borderRadius: SPACING.space_16,
    borderWidth: SPACING.space_1,
    borderColor: COLORS.tertiary[500],
    padding: SPACING.space_16,
    color: COLORS.primary[600],
  },
  signInButton: {
    borderRadius: SPACING.space_10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary[700],
    marginHorizontal: SPACING.space_22,
    marginBottom: SPACING.space_26,
    marginTop: SPACING.space_50,
  },
  signInButtonText: {
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
    color: COLORS.white,
    textAlign: 'center',
    paddingVertical: SPACING.space_14,
  },
});

export default styles;
