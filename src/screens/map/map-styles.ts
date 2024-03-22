import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { SPACING, Typography, COLORS } from "../../theme";

interface IMapStyles {
    container: ViewStyle;
    subContainer: ViewStyle;
    detailContainer: ViewStyle;
    title: TextStyle;
    subTitle: TextStyle;
    icon: ViewStyle;
    image: ImageStyle;
}

const styles : IMapStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    subContainer: {
        borderRadius: SPACING.space_10,
        borderWidth: SPACING.space_1,
        borderColor: COLORS.tertiary[600],
        marginTop: SPACING.space_40,
        marginHorizontal: SPACING.space_14,
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
        marginVertical: SPACING.space_10,
        marginLeft: SPACING.space_18,
    },
    image: {
        alignSelf: 'center',
        marginBottom: SPACING.space_20,
    }
})

export default styles;