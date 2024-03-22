import {StyleSheet, ViewStyle} from 'react-native';

import {COLORS, SPACING} from '../../theme';

interface INewsStyles {
  container: ViewStyle;
  subContainer: ViewStyle;
}

const styles : INewsStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
  },
  subContainer: {
    flex: SPACING.space_1,
  },
});

export default styles;
