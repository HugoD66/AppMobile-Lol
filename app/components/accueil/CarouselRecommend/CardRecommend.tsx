import {StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import React from "react";
import {ButtonTwo} from "../../button/ButtonTwo";

export function CardRecommend() {
  return (
    <View style={styles.card}>
      <Image style={styles.pictureChamp} source={require('../../../../assets/accueil/3-carousel-recomm/recomm-Vi.png')}></Image>

      <Image style={styles.backPicture} source={require('../../../../assets/accueil/3-carousel-recomm/backOne-recomm.png')}></Image>
        <View style={styles.contentCardRecom}>
          <View style={styles.contentText}>
            <Text style={styles.titleRecomCard}>Vi</Text>
            <Text style={styles.subtitleRecomCard}>Au défenseur de
              Piltover</Text>
            <ButtonTwo />
          </View>
        </View>

    </View>

  )
}
const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
  },
  backPicture: {
    width: '100%',
    height: 250,
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
    bottom: 10,
  },
  titleRecomCard: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
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

  },
  pictureChamp: {
    width: 380,
    height: 280,
    top: -40,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 10,
    left: 100,
  }
});