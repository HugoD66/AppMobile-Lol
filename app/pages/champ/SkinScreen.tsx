import {StyleSheet, View, Image, ScrollView} from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";

export function SkinScreen() {



  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.galery}>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko1.webp')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko2.jpg')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko3.webp')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko4.jpg')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko5.webp')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko6.webp')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/ekko7.webp')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/zac1.jpg')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/zac2.jpg')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/zac3.jpg')} style={styles.pictureGalery}/>
        <Image source={require('../../../assets/tempEzChamp/tempSkinsChamp/zac4.jpg')} style={styles.pictureGalery}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  galery: {
    backgroundColor: 'red',
    transform: [{ rotate: '90deg' }],
    width: '100%',
  },
  pictureGalery: {
    margin: 2,
  },
  actualSkin: {
    height: SCREEN_HEIGHT * 8,
    width: SCREEN_WIDTH,
    backgroundColor: 'red',
  },
  }
);