import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../types/screenDim";
import { LinearGradient } from "expo-linear-gradient";
import { RootStackNavigationProps } from "../../../App";

import { GetDataChampion } from "../../logic/logicChamp";
import { useQuery } from "react-query";
import { RouteParams } from "../../types/RouteParams";
import {Loader} from "../../components/loader/Loader";
import {Error} from "../../components/loader/Error";
export function Champion() {
    const [showDivider, setShowDivider] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [selectedSpellName, setSelectedSpellName] = useState('');
    const [selectedSpellLetter, setSelectedSpellLetter] = useState('');
    const [spellDescription, setSpellDescription] = useState('');
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
    if(!championData.spells) {
        return <Text>Erreur spell</Text>
    }

    const selectSkill = (skillId: string | null) => {
        const selectedSpell = championData.spells.find((spell: { id: string; }) => spell.id === skillId);
        if (selectedSpell) {
            setShowDivider(true);
            setSelectedSkill(skillId);
            setSelectedSpellLetter(selectedSpell.id.charAt(0));
            setSelectedSpellName(selectedSpell.name);
            setSpellDescription(selectedSpell.description);
        }
    };
    const navigate = () => {
        navigation.navigate('SkinScreen', { nom: `${name}` });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Image style={styles.pictureChamp} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg` }} />
            <LinearGradient style={styles.linear}
                            colors={[
                              'rgba(52,43,43,0)',
                              'rgb(0,0,0)'
                            ]}
            />
          </View>
          <View style={styles.titleSubTitleIcon}>
              <View style={styles.titleSubTitle}>
                  <Text style={styles.titleChamp}>{name}</Text>
                  <Text style={styles.subTitle}>{championData.title}</Text>
              </View>
              <Image style={styles.likeChampIcon} source={require('../../../assets/buttons/hearth.png')} />
          </View>
          <Text style={styles.description}>{championData.lore}</Text>
          <Text style={styles.skills}>Skills</Text>
          <View style={styles.skillsContent}>
              {championData.spells.map((spell: { id: string | null; image: { full: any; }; }, index: React.Key | null | undefined) => (
                  <TouchableOpacity key={index} onPress={() => selectSkill(spell.id)}>
                      <Image style={styles.skillsPicture} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/${spell.image.full}` }} />
                      {selectedSkill === spell.id && <Image style={styles.overlayImage} source={require('../../../assets/champ/spell-selected.png')} />}
                  </TouchableOpacity>
              ))}
          </View>
          {showDivider && <View style={styles.divider} />}
          <View style={styles.descLetterNameSpell}>
              <Text style={styles.letterSpell}>{selectedSpellLetter}</Text>
              <Text style={styles.nameSpell}>{selectedSpellName}</Text>
              <Text style={styles.descSpell}>{spellDescription}</Text>
          </View>
          <View style={styles.generalInformations}>
              <Image style={styles.pictureRole} source={require('../../../assets/tempEzChamp/Atirador.png')} />
              <View style={styles.textRoleRoleImport}>
                  <Text style={styles.role}>Rôle</Text>
                  <Text style={styles.roleImport}>Tireur</Text>
              </View>
              <View style={styles.difficultInformations}>
                  <Text style={styles.textDifficult}>Difficulté</Text>
                  <Text style={styles.niveauDifficult}>Facile</Text>
                  <Image style={styles.pictureDifficult} source={require('../../../assets/tempEzChamp/niveau.png')} />
              </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={navigate}>
              <Text style={styles.buttonText}>Skins</Text>
          </TouchableOpacity>
          <View style={styles.endScreen}></View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    overlayImage: {
        position: 'absolute',
        width: SCREEN_WIDTH * .18,
        height: SCREEN_WIDTH * .18,
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#8B00FF',
    },
    container: {
      width: SCREEN_WIDTH,
      backgroundColor: '#070707',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pictureChamp: {
      height: SCREEN_HEIGHT * .40,
      width: SCREEN_WIDTH,
    },
    linear: {
      position:'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 200,
    },
    titleSubTitleIcon: {
      width: SCREEN_WIDTH * .92,
      display: 'flex',
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 4,
    },
    titleSubTitle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      textAlign: 'left',
      zIndex: 4,
    },
    titleChamp: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    subTitle: {
      color: 'white',
      fontWeight: '200'
    },
    likeChampIcon: {
      marginRight: SCREEN_WIDTH * .05,
      zIndex: 4,
    },
    description: {
      color: 'white',
      width: SCREEN_WIDTH * .92,
      fontSize: 16,
      zIndex: 4,
    },
    skills : {
      width: SCREEN_WIDTH,
      textAlign: 'center',
      color: 'white',
      marginTop: 4,
      marginLeft: 60,
      fontWeight: '200'
    },
    skillsContent: {
      width: SCREEN_WIDTH * .92,
      height: 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 4,
    },
    skillsPicture: {
      width: SCREEN_WIDTH * .16,
      height: SCREEN_WIDTH * .16,
    },
    descLetterNameSpell: {
      width: SCREEN_WIDTH * .92,
      display: 'flex',
      flexDirection: 'column',
      marginTop: 20,
    },
    letterSpell: {
      color: '#8B00FF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    nameSpell: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
    },
    descSpell: {
      width: '100%',
      color: 'white',
      fontSize: 14,
      fontWeight: '300',
      marginTop: 10,
    },
    generalInformations: {
      width: SCREEN_WIDTH,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
    },
    pictureRole: {
      width: SCREEN_WIDTH * .2,
      height: SCREEN_WIDTH * .2,

    },
    textRoleRoleImport: {
        marginRight: SCREEN_WIDTH * .16,
    },
    role: {
      fontWeight: '300',
      color: 'white',
      marginBottom: 6,
      fontSize: 14,
    },
    roleImport: {
      color: 'white',
      fontSize: 26,
      fontWeight: 'bold',
    },
    difficultInformations: {
      marginBottom: 30,
    },
    textDifficult: {
      color: 'white',
      fontWeight: '300',
      fontSize: 14,
    },
    niveauDifficult: {
      color: 'white',
      marginBottom: 6,
      fontSize: 26,
    },
    pictureDifficult: {
    },
    button: {
      width: SCREEN_WIDTH * .92,
      height: 76,
      backgroundColor: '#8B00FF',
      margin: 20,
      marginBottom: 20,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 6,
      fontWeight: 'bold',
      fontSize: 16,
    },
    endScreen: {
      height: SCREEN_HEIGHT * .01,
    }
});