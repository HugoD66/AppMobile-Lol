import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProps } from "../carousel/CarouselChamp/CardChamp";
import { SCREEN_WIDTH } from "../../types/screenDim";
import {UserProps} from "../../types/UserProps";
import {APIKey} from "../../../APIKey";
import axios from "axios/index";
import React, {useEffect, useState} from "react";
import {InvocDataInterface} from "../../types/InvocDataInterface";

export function SumNav({ invocateur }: UserProps) {
  const navigation = useNavigation<StackNavigationProps>();
  const [invocData, setInvocData] = useState<InvocDataInterface | null>(null);

  const getInvocPicture = async (invocateur: string) => {
    try {
      const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${invocateur}?api_key=${APIKey}`;
      const response = await axios.get(url);
      console.log(response.data);
      setInvocData({
        idInvoc: response.data.id,
        name: response.data.name,
        // @ts-ignore
        profileIconId: response.data.profileIconId,
        summonerLevel: response.data.summonerLevel,
      });
    } catch (error) {
      console.error(error);
    }
  }
  const navigate = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Search');
  };
  const navigateLogin = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Login');
  };
  const navigateRegister = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Register');
  }
  console.log(`invocateur: ${invocateur}`)

  useEffect(() => {
    if (invocateur) {
      getInvocPicture(invocateur);
    }
  }, [invocateur]);
  return (
    <View style={styles.sumNav}>
      <TouchableOpacity onPress={navigateLogin}>
        { invocateur && invocData ?
          <Image style={styles.imageIconeSumNav} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${invocData.profileIconId}.png` }} />
          :
          <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateRegister}>
        <View style={styles.sumNavTitleDesc}>
          <Text style={styles.title}>{invocateur ? invocateur : 'S\'enregistrer'}</Text>
          <Text style={styles.subtitle}>{invocateur ? 'Identifié' : 'Non identifié'}</Text>
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
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    zIndex: 2,
    height: 120,
    width: SCREEN_WIDTH,
  },
  imageIconeSumNav: {
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 90,
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  sumNavTitleDesc: {
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
  },
  loopSearch: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 35,
  },
  rank: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    marginRight: 10,
  }
})