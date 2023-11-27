import {View, StyleSheet, ScrollView, TouchableOpacity, Text, Image} from "react-native";
import { SearchInvocProps } from '../../types/SearchInvocProps';
import React from 'react';
import {SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";

export function ResultSearchInvoc({ invocData }: SearchInvocProps) {
  if(!invocData) return null;

  const navigation = useNavigation<RootStackNavigationProps>();
  const navigateHomeTemp = () => {
    navigation.navigate('Accueil');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {invocData &&  (
          <TouchableOpacity style={styles.touchableContent} onPress={() => navigateHomeTemp()}>
            <Text style={styles.titleCard}>{invocData?.name}</Text>
            <Image style={styles.pictureInvocCard} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${invocData?.profileIconId}.png` }} />
            <Text style={styles.subtitleCard}>{invocData?.summonerLevel}</Text>
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