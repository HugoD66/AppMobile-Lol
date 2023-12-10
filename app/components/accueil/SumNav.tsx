import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation} from "@react-navigation/native";
import { StackNavigationProps } from "../carousel/CarouselChamp/CardChamp";
import { SCREEN_WIDTH } from "../../types/screenDim";
import React from "react";
import theme from "../../../theme";
import {CompleteInvocDataInterface, InvocDataInterface} from "../../types/InvocDataInterface";


export function SumNav({ invocateur }: { invocateur: CompleteInvocDataInterface | InvocDataInterface | null }) {

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
    navigation.navigate('Invocateur', { invocateur: invocateur });
  }

  return (
    <View style={styles.sumNav}>
      { invocateur ?
        <TouchableOpacity onPress={navigateInvocScreen}>
          <Image style={styles.imageIconeSumNav} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${invocateur.profileIconId}.png` }} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={navigateLogin}>
          <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
        </TouchableOpacity>
      }
      <TouchableOpacity onPress={navigateRegister}>
        <View style={styles.sumNavTitleDesc}>
          <Text style={styles.title}>{invocateur?.id ? invocateur.name : 'S\'enregistrer'}</Text>
          { invocateur  ?
            <Text style={styles.subtitle}>{`Level : ${ invocateur.summonerLevel }`}</Text>
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
    marginTop: 26,
    margin: 10,
    backgroundColor: theme.colors.black,
    width: SCREEN_WIDTH,
  },
  imageIconeSumNav: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
    marginTop: 10,
    marginLeft: 22,
    borderRadius: 90,
  },
  sumNavTitleDesc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 16,
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
    marginLeft: 34,
    marginRight: 8,
  },
  rank: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
    marginRight: 22,
  }
})