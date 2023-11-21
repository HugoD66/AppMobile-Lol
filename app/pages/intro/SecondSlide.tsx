import React, {useEffect} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {IntroStackNavigationProps} from "../../../App";
import {LinearGradient} from "expo-linear-gradient";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";

export function SecondSlide() {

    const navigation = useNavigation<IntroStackNavigationProps>();
    const navigate = () => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('ThirdSlide');
    };
    return (
    <View style={styles.container}>
        <Image
            style={styles.pictureChamp}
            source={require('../../../assets/intro/intro-secondSlide.png')}
        />
        <View style={styles.linear}>
            <LinearGradient style={styles.linearGradient}
                colors={[
                    'rgba(52,43,43,0)',
                    'rgb(0,0,0)'
                ]}
            />
        </View>
        <View style={styles.section}>
                <View style={styles.flexOblig}></View>
                <Text style={styles.title}>Choisissez les meilleurs champions </Text>
                <Text style={styles.desc}> "Les meilleurs champions, builds, match-ups et tout ce dont vous avez besoin pour vous améliorer dans le jeu. </Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigate() }}>
                    <Image style={styles.pictureButton} source={require('../../../assets/buttons/just_button.png')} />
                </TouchableOpacity>
        </View>
    </View>


          );
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#070707',
    },
    pictureChamp: {
        margin: 0,
        top: 0,
        height: SCREEN_HEIGHT * .5,
        width: SCREEN_WIDTH,
        zIndex: 1,
        position: "absolute"
    },
    linear: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        top: SCREEN_HEIGHT * .3,

    },
    linearGradient: {
        zIndex: 2,
        width: '100%',
        height: SCREEN_HEIGHT * .2,
    },
    section: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
    },
    flexOblig: {
        height: SCREEN_HEIGHT * .18,
    },
    title: {
        margin: '5%',
        width: '80%',

        zIndex: 13,
        color: 'white',
        textAlign: 'center',
        //bottom: '-10%',
        //fontFamily: 'DM Sans',
        fontSize: 32,
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        //fontWeight: "light",
        letterSpacing: 2,
        margin: '5%',
        fontWeight: "100",

        width: '70%',
        fontSize: 16,
        //fontFamily: 'Calibri'
    },
    button: {

        zIndex: 6,
        width: '15%',
        backgroundColor: 'rgb(72,0,255)',
        margin: '5%',
    },
    pictureButton: {
        margin: 'auto',
        width: '100%',

    }
})