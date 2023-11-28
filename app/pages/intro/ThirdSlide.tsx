import React from "react";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { IntroStackNavigationProps } from "../../../App";
import { Slide } from "./Slides";

export default function ThirdSlide() {

    const navigation = useNavigation<IntroStackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
        navigation.navigate('FourthSlide');
    };

    return (
      <Slide
        imageSource={require('../../../assets/intro/intro-thirthSlide.png')}
        title="Élevez votre elo rapidement"
        description={`Assurez-vous de regarder l'application qui vous fera passer au niveau supérieur.\n`}
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
});
