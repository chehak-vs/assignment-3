import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { SPACING, Typography, COLORS } from "../../theme";

interface IASHomeHeaderStyles {
    container: ViewStyle;
    iconContainer: ViewStyle;
    icon: ViewStyle;
    title: TextStyle;
    subTitle: TextStyle;
  }

const styles : IASHomeHeaderStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: SPACING.space_1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainer: {
        alignItems: 'center',
        borderColor: COLORS.tertiary[600],
        borderRadius: SPACING.space_10,
        borderWidth: SPACING.space_1,
        flexDirection: 'row',
        height: SPACING.space_32,
        justifyContent: 'center',
        marginRight: SPACING.space_12,
        marginTop: SPACING.space_16,
        width: SPACING.space_52,
    },
    icon: {
        height: SPACING.space_16,
        padding: SPACING.space_8,
        width: SPACING.space_16,
    },
    title: {
        color: COLORS.primary[700],
        fontFamily: Typography.secondary.bold,
        fontSize: SPACING.space_17,
        lineHeight: SPACING.space_22,
        marginLeft: SPACING.space_17,
        marginTop: SPACING.space_22,
    },
    subTitle: {
        color: COLORS.tertiary[700],
        fontFamily: Typography.secondary.medium,
        fontSize: SPACING.space_14,
        lineHeight: SPACING.space_18,
        marginBottom: SPACING.space_10,
        marginLeft: SPACING.space_17,
        marginTop: SPACING.space_4,
    },
})

export default styles;