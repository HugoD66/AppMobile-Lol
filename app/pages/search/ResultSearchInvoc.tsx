import {View, StyleSheet, ScrollView, TouchableOpacity, Text, Image} from "react-native";
import { SearchInvocProps } from '../../types/SearchInvocProps';
import React from 'react';
import {SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {CompleteInvocDataInterface, InvocDataInterface} from "../../types/InvocDataInterface";
import {getCompleteSummonerData, getSummonerData} from "../../logic/logicInvoc";
export function ResultSearchInvoc({ idInvoc, name, summonerLevel, profileIconId }: SearchInvocProps) {
  const navigation = useNavigation<RootStackNavigationProps>();

  const navigateInvoc = async () => {
    const invocateur = await getSummonerData(name);
    // @ts-ignore
    navigation.navigate('Invocateur', {
      invocateur: invocateur
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {name &&  (
          <TouchableOpacity style={styles.touchableContent} onPress={() => navigateInvoc()}>
            <Text style={styles.titleCard}>{name}</Text>
            <Image style={styles.pictureInvocCard} source={{ uri: `https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${profileIconId}.jpg` }} />
            <Text style={styles.subtitleCard}>{summonerLevel}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    flexWrap: 'wrap',
    height: 'auto'
  },
  touchableContent : {
    width: SCREEN_WIDTH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  pictureInvocCard: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .4,
    height: SCREEN_WIDTH * .4,
    borderRadius: 45,
  },
  titleCard: {
    color: 'white',
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitleCard: {
    color: 'white',
    fontSize: 28,
    backgroundColor: 'rgb(12,12,12)',
    zIndex: 100,
    fontWeight: '300',
    bottom: 20,
    borderRadius: 10,
  },
});