import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { SPACING, Typography, COLORS } from "../../theme";

interface IASHomeCardStyles {
    container: ViewStyle;
    subContainer: ViewStyle;
    image: ImageStyle;
    title: TextStyle;
    subTitle: TextStyle;
    icon: ImageStyle;
}

const styles : IASHomeCardStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: COLORS.tertiary[600],
        borderRadius: SPACING.space_10,
        borderWidth: SPACING.space_1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: SPACING.space_8,
        marginHorizontal: SPACING.space_10,
    },
    subContainer: {
        flexDirection: 'row',
        padding: SPACING.space_16,
        gap: SPACING.space_8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: SPACING.space_47,
        width: SPACING.space_47,
    },
    title: {
        color: COLORS.primary[400],
        fontFamily: Typography.primary.medium,
        fontSize: SPACING.space_22,
        lineHeight: SPACING.space_28,
    },
    subTitle: {
        color: COLORS.primary[400],
        fontFamily: Typography.primary.bold,
        fontSize: SPACING.space_17,
        lineHeight: SPACING.space_22,
    },
    icon: {
        height: SPACING.space_28,
        width: SPACING.space_28,
        overflow: 'hidden',
    }
})

export default styles;