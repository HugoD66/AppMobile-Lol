import {Text, StyleSheet, ScrollView } from "react-native";
import { SumNav } from "../../components/accueil/SumNav";
import { TitleAccueil } from "../../components/title/TitleAccueil";
import { CarouselChamp } from "../../components/carousel/CarouselChamp/CarouselChamp";
import { CarouselRecommend } from "../../components/carousel/CarouselRecommend/CarouselRecommend";
import { CarouselRuneterra } from "../../components/carousel/CarouselRunterra/CarouselRuneterra";
import { ContentPlayerList } from "../../components/accueil/PlayerList/ContentPlayerList";
import {UserProps} from "../../types/UserProps";
import {useRoute} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {SCREEN_WIDTH} from "../../types/screenDim";
import theme from "../../../theme";
import {InvocDataInterface} from "../../types/InvocDataInterface";
import {SearchInvocProps} from "../../types/SearchInvocProps";
// @ts-ignore
//import {GetDataInvoc, getSummonerData} from "../../logic/logicInvoc";
import { RouteProp } from '@react-navigation/native';
import {StackParamList} from "../../../App";
type AccueilRouteProp = RouteProp<StackParamList, 'Accueil'>;

export function Accueil({ route }: { route: AccueilRouteProp }) {

  const { invocateur } = route.params || {};
  const { id, name, summonerLevel, profileIconId } = invocateur || {};



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SumNav name={name} summonerLevel={summonerLevel} idInvoc={id} profileIconId={profileIconId}/>
      <TitleAccueil
        title="Mes champions"
        subtitle="Voir tous"/>
      <CarouselChamp />
      <TitleAccueil
        title="Recommandés pour vous"
        subtitle=""
        titleStyle={styles.title}
      />
      <CarouselRecommend />
      <TitleAccueil
        title="Runeterra"
        subtitle=""/>
      <CarouselRuneterra />
      <TitleAccueil
        title="Builds de pro-players"
        subtitle="Voir tous"/>
      <ContentPlayerList />
    </ScrollView>
    );
}
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    backgroundColor: theme.colors.black,
  },
  title : {
    marginBottom: 0,
  },
});