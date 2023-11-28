import React, {useEffect} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {IntroStackNavigationProps} from "../../../App";
import {LinearGradient} from "expo-linear-gradient";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {Slide} from "./Slides";

export function SecondSlide() {

    const navigation = useNavigation<IntroStackNavigationProps>();
    const navigate = () => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('ThirdSlide');
    };


    return (
      <Slide
        imageSource={require('../../../assets/intro/intro-secondSlide.png')}
        title="Choisissez les meilleurs champions"
        description="Les meilleurs champions, builds, match-ups et tout ce dont vous avez besoin pour vous améliorer dans le jeu."
        button={
            <TouchableOpacity onPress={navigate}>
                <Image style={styles.pictureButton} source={require('../../../assets/buttons/just_button.png')} />
            </TouchableOpacity>
        }
      />
  );
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#070707',
    },
    pictureChamp: {
        height: SCREEN_HEIGHT * .61,
        width: SCREEN_WIDTH,
    },
    linear: {
        position:'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
    },
    section: {
        alignItems: 'center',
    },
    title: {
        marginHorizontal: 38,
        marginBottom: 16,
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        fontWeight: "100",
        fontSize: 16,
        lineHeight: 24,
        marginHorizontal: 50,
        marginBottom: 22,
    },
    pictureButton: {
        width: 56,
        height: 56,
    }
})