import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IntroStackNavigationProps } from "../../../App";
import { Slide } from "./Slides";

export function SecondSlide() {

    const navigation = useNavigation<IntroStackNavigationProps>();
    const navigate = () => {
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
    pictureButton: {
        width: 56,
        height: 56,
    }
})