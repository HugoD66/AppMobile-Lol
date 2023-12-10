import {StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import React from "react";
import {CardChampProps} from "../../../types/CardRecommendProps";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../../../App";
import {useNavigation} from "@react-navigation/native";
import theme from "../../../../theme";

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
    resizeMode: 'cover',
    position: 'absolute',
    height: 250,
    borderRadius: 20,
  },
  pictureChamp: {
    resizeMode: 'contain',
    position: 'absolute',
    width: 250,
    height: 280,
    top: -25,
    left: 100,
    zIndex: 2,
  },
  linear: {
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 20,
    height: 250,
  },
  contentCardRecom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginLeft: '5%',
    marginTop: '5%',
  },
  contentText: {
    bottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    marginTop: 70,
  },
  titleRecomCard: {
    fontFamily: 'DM-Sans',
    zIndex: 3,
    fontSize: theme.fontSize.titleCardRecom,
    color: theme.colors.white,
  },
  subtitleRecomCard: {
    fontWeight: '300',
    width: '70%',
    textAlign: 'justify',
    fontFamily: 'Inter',
    zIndex: 3,
    color: theme.colors.subtitleCard,
    fontSize: theme.fontSize.subtitleCardRecom,
  },
  button: {
    width: 100,
    height: 100,
  },
  pictureButton: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginTop: 10,
  },
});