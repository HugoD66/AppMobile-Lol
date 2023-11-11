import React, {useEffect} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import {LinearGradient} from "expo-linear-gradient";

export function SecondSlide() {

    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('ThirdSlide');
    };
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.linearGradient}
                            colors={[
                                'rgba(52,43,43,0)',
                                'rgb(0,0,0)'
                            ]}
            />
            <Image  style={styles.image} source={require('../../../assets/intro/intro-secondSlide.png')} />
            <Text style={styles.title}>Choisissez les meilleurs champions </Text>
            <Text style={styles.desc}> "Les meilleurs champions, builds, match-ups et tout ce dont vous avez besoin pour vous améliorer dans le jeu. </Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigate() }}>
                <Image style={styles.pictureButton} source={require('../../../assets/buttons/just_button.png')} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    image: {
        margin: 0,
        top: -50,
        height: 480,
        width: '100%',
        resizeMode: 'cover',
        zIndex: 1,
        position: 'absolute'
    },
    linearGradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
        position:'absolute',
        height: 530,
        top: -80,
    },
    title: {
        width: '100%',
        zIndex: 3,
        color: 'white',
        textAlign: 'center',
        bottom: '-20%',
        //fontFamily: 'DM Sans',
        fontSize: 32,
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        fontWeight: "light",
        letterSpacing: 2,
        bottom: '-25%',
        width: '70%',
        fontSize: 16,
        //fontFamily: 'Calibri'
    },
    button: {
        zIndex: 6,
        bottom: '-31%',
        width: '15%',
        backgroundColor: 'rgb(72,0,255)',
        margin: 'auto',
    },
    pictureButton: {
        margin: 'auto',
        width: '100%',

    }
})