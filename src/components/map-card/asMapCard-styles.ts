import {StyleSheet} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E4E4E4',
    marginVertical: 16,
    marginHorizontal: 12,
    padding: 4,
  },
  subContainer: {
    flexDirection: 'row',
  },
  image: {},
  textContainer: {
    padding: 12,
  },
  icon: {},
  title: {
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_18,
    lineHeight: SPACING.space_22,
    color: COLORS.primary[400],
    marginBottom: 4,
  },
  subTitle: {
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_18,
    color: COLORS.tertiary[700],
  },
});

export default styles;
