import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {ButtonOne} from "../../components/button/ButtonOne";
import React from "react";
export default function FourthSlide() {

    return (
      <View style={styles.container}>
          <View>
              <Image
                style={styles.pictureChamp}
                source={require('../../../assets/intro/intro-fourthSlide.png')}
              />
              <LinearGradient style={styles.linear}
                              colors={[
                                  'rgba(52,43,43,0)',
                                  'rgb(0,0,0)'
                              ]}
              />
          </View>
        <View style={styles.section}>
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
    buttonOneCustom: {
        marginTop: '5%',
    }
});
