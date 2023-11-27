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
    flexDirection: 'row',
  },
  touchableContent : {
    width: SCREEN_WIDTH * .9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pictureCard: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .80,
    height: 200
  },
  pictureInvocCard: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .80,
    height: 200,
    borderRadius: 90,
  },
  titleCard: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 5,
    padding: 5,
  },
  subtitleCard: {
    color: 'white',
    fontSize: 17,
    fontWeight: '300',
    marginTop: 4,
    marginBottom: 15,
    padding: 5,
  },
  contentTexts : {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});