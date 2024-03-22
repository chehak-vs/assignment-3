import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {SPACING, Typography, COLORS} from '../../theme';

interface IASHomeDetailStyles {
  container: ViewStyle;
  detailContainer: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  icon: ViewStyle;
  image: ImageStyle;
}

const styles: IASHomeDetailStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.tertiary[600],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    marginHorizontal: SPACING.space_14,
    marginTop: SPACING.space_40,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  title: {
    color: COLORS.primary[700],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_17,
    lineHeight: SPACING.space_22,
    marginLeft: SPACING.space_18,
    marginTop: SPACING.space_14,
  },
  subTitle: {
    color: COLORS.tertiary[700],
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
    marginLeft: SPACING.space_14,
    marginVertical: SPACING.space_8,
  },
  icon: {
    marginLeft: SPACING.space_18,
    marginVertical: SPACING.space_10,
  },
  image: {
    alignSelf: 'center',
    marginBottom: SPACING.space_20,
  },
});

export default styles;
