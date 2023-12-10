import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { BackArrowProps } from "../../types/BackArrowProps";
import theme from "../../../theme";
import Svg, {Path} from "react-native-svg";

export function BackArrow({ navigate, style }: BackArrowProps) {
    return (
        <TouchableOpacity onPress={() => navigate()} style={StyleSheet.flatten([styles.arrowBackButton, style])} >
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
                <Path d="M16 17L9 11.5L16 6" fill="#000"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    arrowBackButton: {
        marginTop: 70,
        right: SCREEN_WIDTH * 0.38,
        margin: 20,
        width: 20,
    },
    arrowBack: {
        width: 20,
        height: 20,
    },
});