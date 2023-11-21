import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";

export function BeforeSearch() {
  return (
    <View style={styles.contentPoro} >
        <View>
          <Image style={styles.radialGradient} source={require('../../../assets/search/radial-gradient.png')} />
          <Image style={styles.picturePoro} source={require('../../../assets/search/poro.png')} />
        </View>
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
    width: SCREEN_WIDTH,
  },
  picturePoro: {
    position: "absolute",
    top: SCREEN_HEIGHT * 0.1,
    zIndex: 2,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    marginLeft: SCREEN_WIDTH * .2,
  },
  radialGradient: {
    top: SCREEN_HEIGHT * 0.08,
  },
  title: {
    zIndex: 2,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  subtitle: {
    zIndex: 2,
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    width: SCREEN_WIDTH * 0.7,
    color: 'white',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
});