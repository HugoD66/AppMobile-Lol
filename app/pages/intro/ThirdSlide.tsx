import { StatusBar } from 'expo-status-bar';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import React, {useEffect} from "react";

export default function ThirdSlide() {

    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
        navigation.navigate('FourthSlide');
    };


    return (
        <View style={styles.container}>
            <LinearGradient style={styles.linearGradient}
                            colors={[
                                'rgba(52,43,43,0)',
                                'rgb(0,0,0)'
                            ]}
            />

                <Text style={styles.title}>Élevez votre elo rapidement </Text>

                <Image  style={styles.image} source={require('../../../assets/intro/intro-thirthSlide.png')} />
            <TouchableOpacity onPress={() => {
                navigate();
            }}>
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
        top: -250,
        height: 700,
        resizeMode: 'cover',
        zIndex: 1,
        position: 'absolute'
    },
    linearGradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        position:'absolute',
        height: 530,
        top: -80,
    },
    title: {
        width: '60%',
        zIndex: 3,
        color: 'white',
        textAlign: 'center',
        bottom: -125,
        //fontFamily: 'DM Sans',
        fontSize: 32,
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        fontWeight: "light",
        letterSpacing: 2,
        bottom: -150,
        width: '70%',
        fontSize: 16,
        //fontFamily: 'Calibri'
    },
    button: {
        zIndex: 6,
        bottom: -280,
        width: '25%',
        height: '18%',
        backgroundColor: 'rgb(72,0,255)',
        margin: 'auto',

    },
    pictureButton: {
        margin: 'auto',

    }
});
