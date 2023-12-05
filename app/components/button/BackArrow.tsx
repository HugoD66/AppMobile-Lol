import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { BackArrowProps } from "../../types/BackArrowProps";
import theme from "../../../theme";

export function BackArrow({ navigate, style }: BackArrowProps) {
    return (
        <TouchableOpacity onPress={() => navigate()} style={StyleSheet.flatten([styles.arrowBackButton, style])} >
            <Image style={styles.arrowBack} source={require('../../../assets/search/arrow-back.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    arrowBackButton: {
        marginTop: 70,
        right: SCREEN_WIDTH * 0.38,
        margin: theme.spacing.i,
        width: theme.spacing.i,
    },
    arrowBack: {
        width: theme.spacing.i,
        height: theme.spacing.i,
    },
});