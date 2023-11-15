import {LinearGradient} from "expo-linear-gradient";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";

export function BeforeSearch() {
  return (
    <View style={styles.contentPoro} >
      <LinearGradient
        // Couleurs du dégradé
        colors={['#8A2BE2', '#9370DB']} // Exemple de dégradé violet
        // Style du dégradé
        style={styles.gradientBackground}
      >
        <Image style={styles.picturePoro} source={require('../../../assets/search/poro.png')} />
      </LinearGradient>
      <Text style={styles.title}>Faites une recherche.</Text>
      <Text style={styles.subtitle}>Que souhaitez-vous trouver aujourd'hui ?</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  contentPoro: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.9 ,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  picturePoro: {
    zIndex: 2,
    /*
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    marginRight: SCREEN_WIDTH * 0.05,
    marginBottom: SCREEN_HEIGHT * 0.1,
     */
  },
  title: {
    zIndex: 2,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    //marginBottom: SCREEN_HEIGHT * 0.02,
  },
  subtitle: {
    zIndex: 2,
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    width: SCREEN_WIDTH * 0.7,
    color: 'white',
    //marginBottom: SCREEN_HEIGHT * 0.02,
  },
  gradientBackground: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    borderRadius: (SCREEN_WIDTH * 0.4) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 8,
    //boxShadow: '5px 5px 37px 50px #FF0000',
  },
});