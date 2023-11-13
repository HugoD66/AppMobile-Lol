import React, {useEffect} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import { LinearGradient } from 'expo-linear-gradient';

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

          <Image  style={styles.backgroundImage} source={require('../../../assets/intro/intro-thirthSlide.png')} />
          <Text style={styles.title}>Élevez votre elo rapidement </Text>
          <Text style={styles.desc}> Assurez-vous de regarder l'application qui vous fera passer au niveau supérieur </Text>
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
    backgroundImage: {
        margin: 0,
        top: -50,
        height: '60%',
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
        //fontWeight: "light",
        letterSpacing: 2,
        bottom: -150,
        width: '70%',
        fontSize: 16,
        //fontFamily: 'Calibri'
    },
    button: {
        zIndex: 6,
        bottom: '-33%',
        width: '15%',
        backgroundColor: 'rgb(72,0,255)',
        margin: 'auto',
    },
    pictureButton: {
        margin: 'auto',
        width: '100%',

    }
});
