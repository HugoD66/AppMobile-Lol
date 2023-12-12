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
import Svg, {Path} from "react-native-svg";

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
            <Svg
              width={100}
              height={100}
              viewBox="0 0 60 60"
            >
              <Path d="M16 17L9 11.5L16 6" fill="#000"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
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
      margin: 10,
      width: SCREEN_HEIGHT,
      height: SCREEN_WIDTH,
    },
    arrowBackButton: {
      top: '33%',
      position: 'absolute',
      backgroundColor: theme.colors.black,
      zIndex: 30,
      right: -100,
      borderRadius: 90,
      width: 40,
      height: 40,
    },
    arrowBack: {
      width: 35,
      height: 35,
    },
  }
);