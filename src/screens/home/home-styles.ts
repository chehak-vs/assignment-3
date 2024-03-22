import { StyleSheet, ViewStyle } from "react-native";

import { SPACING, COLORS } from "../../theme";

interface IHomeStyles {
    container: ViewStyle;
    subContainer: ViewStyle;
}

const styles : IHomeStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    subContainer: {
        borderColor: COLORS.tertiary[600],
        borderRadius: SPACING.space_10,
        borderWidth: SPACING.space_1,
        marginHorizontal: SPACING.space_10,
        marginVertical: SPACING.space_10,
    }
})

export default styles;