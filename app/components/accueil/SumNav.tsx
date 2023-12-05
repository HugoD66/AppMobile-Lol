import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProps } from "../carousel/CarouselChamp/CardChamp";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { UserProps } from "../../types/UserProps";
import React, {useEffect, useState } from "react";
import { InvocDataInterface } from "../../types/InvocDataInterface";
// @ts-ignore
import { GetDataInvoc } from "../../logic/logicInvoc";

export function SumNav({ invocateur }: UserProps) {
  const navigation = useNavigation<StackNavigationProps>();
  const [invocData, setInvocData] = useState<InvocDataInterface | null>(null);

  const getInvocInformations = async (invocateur: string) => {
    try {
      const invocData = await GetDataInvoc({ InvocName: invocateur });
      setInvocData({
        idInvoc: invocData.idInvoc,
        name: invocData.nom,
        profileIconId: invocData.profileIconId,
        summonerLevel: invocData.summonerLevel,
      });
    } catch (error) {
    }
  }
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
  useEffect(() => {
    if (invocateur) {
      getInvocInformations(invocateur);
    }
  }, [invocateur]);

  return (
    <View style={styles.sumNav}>
        { invocateur && invocData ?
          <TouchableOpacity onPress={navigateInvocScreen}>
            <Image style={styles.imageIconeSumNav} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${invocData.profileIconId}.png` }} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={navigateLogin}>
            <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
          </TouchableOpacity>
        }
      <TouchableOpacity onPress={navigateRegister}>
        <View style={styles.sumNavTitleDesc}>
          <Text style={styles.title}>{invocateur ? invocateur : 'S\'enregistrer'}</Text>
          { invocateur && invocData ?
            <Text style={styles.subtitle}>{`Level : ${ invocData.summonerLevel }`}</Text>
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
    marginTop: 20,
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
    width: 170,
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