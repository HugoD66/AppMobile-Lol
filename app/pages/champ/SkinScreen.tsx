import {StyleSheet, View, Image, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";

export function SkinScreen() {

  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate()} style={styles.arrowBackButton}>
        <Image style={styles.arrowBack} source={require('../../../assets/search/arrow-back.png')} />
      </TouchableOpacity>
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
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      alignItems: 'center',
      transform: [{rotate: '90deg'}],
    },
    galery: {
      position: 'absolute',
      backgroundColor: 'red',
      width: SCREEN_HEIGHT,
      height: SCREEN_WIDTH,
      top: '30%',
    },
    pictureGalery: {
      margin: 2,
    },
    arrowBackButton: {
      zIndex: 30,
      position: 'absolute',
      width: 40,
      height: 40,
      borderRadius: 90,
      backgroundColor: 'black',
      top: '33%',
      right: -50,
    },
    arrowBack: {
      width: 35,
      height: 35,
    },
  }
);