import {Text, StyleSheet, View, Image, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation, useRoute} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import { RouteParams } from "../../types/RouteParams";
import {GetDataChampion} from "../../logic/logic"
import {useQuery} from "react-query";

interface Skin {
    id: string;
    num: number;
}


export function SkinScreen() {
    const navigation = useNavigation<RootStackNavigationProps>();
    const route = useRoute();
    const params = route.params as RouteParams;
    const name = params.nom;

    const { data: championData, isLoading, error } = useQuery(['champion', name], () => GetDataChampion({ ChampionNameWithoutSpace: name }), {
        enabled: !!name
    });

    if (isLoading) {
        return <Text>Chargement...</Text>;
    }
    if (error) {
        return <Text>Erreur lors du chargement des données.</Text>;
    }
    if (!championData) {
        return <Text>Données du champion introuvables.</Text>;
    }


  const navigate = () => {
    navigation.navigate('Accueil');
  };
  const skinImages = championData.Skins.map((skin: Skin) => (
            <Image
                key={skin.id}
                style={styles.pictureGalery}
                source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg` }}
            />
  ));
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigate()} style={styles.arrowBackButton}>
              <Image style={styles.arrowBack} source={require('../../../assets/search/arrow-back.png')} />
          </TouchableOpacity>
          <ScrollView horizontal={true} style={styles.galery}>
              {skinImages}
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
      backgroundColor: 'black',
    },
    galery: {
      position: 'absolute',
      backgroundColor: 'black',
      width: SCREEN_HEIGHT,
      height: SCREEN_WIDTH,
      top: '27%',
    },
    pictureGalery: {
      margin: 5,
      width: SCREEN_HEIGHT,
      height: SCREEN_WIDTH,
    },
    arrowBackButton: {
      zIndex: 30,
      position: 'absolute',
      width: 40,
      height: 40,
      borderRadius: 90,
      backgroundColor: 'black',
      top: '33%',
      right: -100,
    },
    arrowBack: {
      width: 35,
      height: 35,
    },
  }
);