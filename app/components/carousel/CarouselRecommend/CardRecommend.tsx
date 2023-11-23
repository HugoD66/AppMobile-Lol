import {StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import React from "react";
import {CardChampProps} from "../../../types/CardRecommendProps";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../../../App";
import {useNavigation} from "@react-navigation/native";

export type StackNavigationProps = NativeStackNavigationProp<StackParamList, 'Accueil'>

export function CardRecommend({titleCard, subTitleCard, pictureChamp, backPicture}: CardChampProps) {

  const navigation = useNavigation<StackNavigationProps>();
  console.log({titleCard})
  const navigate = () => {
    navigation.navigate('Champion', {
      nom: titleCard,
    });
  };

  return (
    <View style={styles.card}>
      <Image style={styles.backPicture}
             source={backPicture}
      />
      <Image
        style={styles.pictureChamp}
        source={pictureChamp}
      />
      <Image
        style={styles.linear}
        source={require('../../../../assets/accueil/3-carousel-recomm/BG.png')}
      />
      <View style={styles.contentCardRecom}>
        <View style={styles.contentText}>
          <Text style={styles.titleRecomCard}>{titleCard}</Text>
          <Text style={styles.subtitleRecomCard}>{subTitleCard}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigate()}>
            <Image style={styles.pictureButton} source={require('../../../../assets/buttons/just_button.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 372,
    height: 200,
  },
  backPicture: {
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 1,
  },
  pictureChamp: {
    width: 250,
    height: 280,
    top: -25,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 3,
    left: 100,
  },
  linear: {
    zIndex: 2,
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 20,
  },
  contentCardRecom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginLeft: '5%',
    marginTop: '5%',
    zIndex: 7,
  },
  contentText: {
    bottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    marginTop: 70,

  },
  titleRecomCard: {
    fontSize: 30,
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
    width: 100,
    height: 100,
    color: 'red',
  },
  pictureButton: {
    marginTop: 10,
    width: 60,
    height: 60,
    borderRadius: 15,
  },

});