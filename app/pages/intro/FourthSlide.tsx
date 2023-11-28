import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {ButtonOne} from "../../components/button/ButtonOne";
import React from "react";
import {Slide} from "./Slides";
export default function FourthSlide() {

    return (
      <Slide
        imageSource={require('../../../assets/intro/intro-fourthSlide.png')}
        title="Élevez votre elo rapidement"
        description="Assurez-vous de regarder l'application qui vous fera passer au niveau supérieur."
        button= { <ButtonOne /> }
      />
    );
}

const styles = StyleSheet.create({

    buttonOneCustom: {
        marginTop: '5%',
    }
});
