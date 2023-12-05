import {Text, StyleSheet, View, Image, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation, useRoute} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import { RouteParams } from "../../types/RouteParams";
import {GetDataChampion} from "../../logic/logicChamp"
import {useQuery} from "react-query";
import {Loader} from "../../components/loader/Loader";
import {Error} from "../../components/loader/Error";
import theme from "../../../theme";

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
      return <Loader />;
    }
    if (error) {
      return <Error />;
    }
    if (!championData) {
      return <Error />;
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{rotate: '90deg'}],
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      backgroundColor: theme.colors.black,
    },
    galery: {
      top: '27%',
      position: 'absolute',
      width: SCREEN_HEIGHT,
      height: SCREEN_WIDTH + 10,
      backgroundColor: theme.colors.black,
    },
    pictureGalery: {
      margin: theme.spacing.d,
      width: SCREEN_HEIGHT,
      height: SCREEN_WIDTH,
    },
    arrowBackButton: {
      top: '33%',
      position: 'absolute',
      backgroundColor: 'black',
      zIndex: 30,
      right: -100,
      borderRadius: 90,
      width: theme.spacing.s,
      height: theme.spacing.s,
    },
    arrowBack: {
      width: 35,
      height: 35,
    },
  }
);