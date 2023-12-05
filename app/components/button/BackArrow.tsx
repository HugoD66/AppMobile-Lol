import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { BackArrowProps } from "../../types/BackArrowProps";

export function BackArrow({ navigate, style }: BackArrowProps) {
    return (
        <TouchableOpacity onPress={() => navigate()} style={StyleSheet.flatten([styles.arrowBackButton, style])} >
            <Image style={styles.arrowBack} source={require('../../../assets/search/arrow-back.svg')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    arrowBackButton: {
        margin: 20,
        width: 20,
        marginTop: 70,
        right: SCREEN_WIDTH * 0.38,
    },
    arrowBack: {
        width: 20,
        height: 20,
    },
});