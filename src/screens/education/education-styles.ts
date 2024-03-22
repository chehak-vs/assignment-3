import { StyleSheet, ViewStyle } from "react-native";

import { COLORS, SPACING } from "../../theme";

interface IEducationStyles {
    container: ViewStyle;
    subContainer: ViewStyle;
  }

const styles : IEducationStyles  = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: SPACING.space_1,
    },
    subContainer: {
        flex: SPACING.space_1,
    }
})

export default styles;