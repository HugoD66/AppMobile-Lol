import {StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import React from "react";

export function CardRecommend() {
  return (
    <View style={styles.container}>
      <Image style={styles.backPicture} source={require('../../../../assets/accueil/3-carousel-recomm/backOne-recomm.png')}></Image>
        <View style={styles.contentCardRecom}>
          <View style={styles.contentText}>
            <Text style={styles.titleRecomCard}>Ezreal</Text>
            <Text style={styles.subtitleRecomCard}>AZEARa arARAea arara</Text>
          </View>
          <Image style={styles.backPicture} source={require('../../../../assets/accueil/3-carousel-recomm/recomm-Vi.png')}></Image>


        </View>

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'blue',
    height: 200,
  },
  backPicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  contentCardRecom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentText: {

  },
  titleRecomCard: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleRecomCard: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    width: '70%',
    textAlign: 'justify',
  },
  button: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
  },
  pictureButton: {
    margin: 'auto',
    width: '10%',

  }
});