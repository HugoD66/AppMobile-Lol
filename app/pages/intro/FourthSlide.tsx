import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {ButtonOne} from "../../components/button/ButtonOne";
import React from "react";
export default function FourthSlide() {




    return (
      <View style={styles.container}>
        <Image
            style={styles.pictureChamp}
            source={require('../../../assets/intro/intro-fourthSlide.png')}
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
            <Text style={styles.title}>Élevez votre elo rapidement </Text>
            <Text style={styles.desc}> Assurez-vous de regarder l'application qui vous fera passer au niveau supérieur </Text>
            <ButtonOne style={styles.buttonOneCustom} />
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
        height: SCREEN_HEIGHT * .40,
    },
    title: {
        margin: '5%',
        width: '80%',
        zIndex: 13,
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        letterSpacing: 2,
        margin: '5%',
        fontWeight: "100",
        width: '70%',
        fontSize: 16,
    },
    buttonOneCustom: {
        marginTop: '5%',
    }
});
