import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import { StackNavigationProps } from "../carousel/CarouselChamp/CardChamp";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { UserProps } from "../../types/UserProps";
import React, {useEffect, useState } from "react";
import { InvocDataInterface } from "../../types/InvocDataInterface";
import theme from "../../../theme";
import { getSummonerData } from "../../logic/logicInvoc";
import {useGetDataInvoc} from "../../hooks/useGetDataInvoc";
import {StackParamList} from "../../../App";
import {SearchInvocProps} from "../../types/SearchInvocProps";


export function SumNav( { idInvoc, name, summonerLevel, profileIconId }: SearchInvocProps ) {
  const navigation = useNavigation<StackNavigationProps>();


  const navigate = () => {
    navigation.navigate('Search');
  };
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  }
  const navigateInvocScreen = () => {
    navigation.navigate('Invocateur');
  }


  return (
    <View style={styles.sumNav}>
      { idInvoc ?
        <TouchableOpacity onPress={navigateInvocScreen}>
          <Image style={styles.imageIconeSumNav} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${profileIconId}.png` }} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={navigateLogin}>
          <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
        </TouchableOpacity>
      }
      <TouchableOpacity onPress={navigateRegister}>
        <View style={styles.sumNavTitleDesc}>
          <Text style={styles.title}>{idInvoc ? name : 'S\'enregistrer'}</Text>
          { idInvoc  ?
            <Text style={styles.subtitle}>{`Level : ${ summonerLevel }`}</Text>
            :
            <Text style={styles.subtitle}>Utilisateur non identifié</Text>
          }
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigate}>
        <Image  style={styles.loopSearch} source={require('../../../assets/general/loopSumNav.png')} />
      </TouchableOpacity>
      <Image style={styles.rank} source={require('../../../assets/accueil/1-nav/rankPicture.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  sumNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 130,
    marginTop: theme.spacing.l,
    margin: theme.spacing.d,
    backgroundColor: theme.colors.black,
    width: SCREEN_WIDTH,
  },
  imageIconeSumNav: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
    marginTop: theme.spacing.d,
    marginLeft: theme.spacing.j,
    borderRadius: theme.spacing.roundBorder,
  },
  sumNavTitleDesc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: theme.spacing.g,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'DM-Sans',
    color: theme.colors.white,
    fontSize: theme.fontSize.titleSum,
  },
  subtitle: {
    fontFamily: 'Inter',
    color: theme.colors.subtitleCard,
    fontSize: theme.fontSize.subTitleSum,
  },
  loopSearch: {
    width: 30,
    height: 30,
    marginLeft: theme.spacing.p,
    marginRight: theme.spacing.c,
  },
  rank: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
    marginRight: theme.spacing.j,
  }
})