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
import theme from "../../../theme";
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
    const spellLetters = ['A', 'Z', 'E', 'R'];

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

  const selectSkill = (skillId: string | null, spellIndex?: any) => {
    let selectedSpell;
    if (skillId === 'passive') {
      selectedSpell = championData.passive;
    } else {
      selectedSpell = championData.spells[spellIndex as number];
    }
    if (selectedSpell) {
      setShowDivider(true);
      setSelectedSkill(skillId);
      setSelectedSpellLetter(spellIndex !== undefined ? spellLetters[spellIndex] : '');
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
            <TouchableOpacity onPress={() => selectSkill('passive')}>
                <Image style={styles.skillsPicture} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/${championData.passive.image.full}` }} />
                {selectedSkill === 'passive' && <Image style={styles.overlayImage} source={require('../../../assets/champ/spell-selected.png')} />}
              </TouchableOpacity>
              {championData.spells.map((spell: { id: string | null; image: { full: any; }; }, index: React.Key | null | undefined) => (
                <TouchableOpacity key={index} onPress={() => selectSkill(spell.id, index)}>
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
                  <Image source={require('../../../assets/tempEzChamp/niveau.png')} />
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
      marginTop: 20,
      height: 2,
      width: SCREEN_WIDTH,
      backgroundColor: theme.colors.purplePrimary,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: SCREEN_WIDTH,
      backgroundColor: theme.colors.black,
    },
    pictureChamp: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT * .40,
    },
    linear: {
      position:'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 200,
    },
    titleSubTitleIcon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: SCREEN_WIDTH * .92,
      height: 100,
    },
    titleSubTitle: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      textAlign: 'left',
    },
    titleChamp: {
      fontFamily: 'DM-Sans',
      marginBottom: 8,
      color: theme.colors.white,
      fontSize: theme.fontSize.titleChamp,
    },
    subTitle: {
      fontFamily: 'Inter',
      marginBottom: 16,
      color: theme.colors.subtitleCard,
      fontSize: theme.fontSize.subTitleCard,
    },
    likeChampIcon: {
      marginRight: SCREEN_WIDTH * .05,
    },
    description: {
      textAlign: 'justify',
      width: SCREEN_WIDTH * .92,
      color: theme.colors.white,
      fontSize: theme.fontSize.subtitleCardRecom,
    },
    skills : {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Inter',
      marginTop: 4,
      marginLeft: 60,
      width: SCREEN_WIDTH
    },
    skillsContent: {
      width: SCREEN_WIDTH * .92,
      height: 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    skillsPicture: {
      width: SCREEN_WIDTH * .16,
      height: SCREEN_WIDTH * .16,
    },
    descLetterNameSpell: {
      flexDirection: 'column',
      width: SCREEN_WIDTH * .92,
      marginTop: 20,
    },
    letterSpell: {
      fontWeight: 'bold',
      color: theme.colors.purplePrimary,
      fontSize: theme.fontSize.subtitleCardRecom,
      marginTop: 20,
    },
    nameSpell: {
      fontFamily: 'DM-Sans',
      color: theme.colors.white,
      fontSize: theme.fontSize.titleSum,
      marginTop: 14,
    },
    descSpell: {
      fontFamily: 'Inter',
      fontSize: theme.fontSize.subtitleCardRecom,
      width: SCREEN_WIDTH * .92,
      marginTop: 14,
      color: theme.colors.subtitleCard,
    },
    generalInformations: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: SCREEN_WIDTH,
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
      color: theme.colors.subtitleCard,
      marginBottom: 8,
      fontSize: theme.fontSize.subtitleCardRecom,
    },
    roleImport: {
      fontFamily: 'DM-Sans',
      fontSize: theme.fontSize.titleSum,
      color: theme.colors.white,
    },
    difficultInformations: {
      marginBottom: 30,
    },
    textDifficult: {
      fontFamily: 'Inter',
      color: theme.colors.subtitleCard,
      fontSize: theme.fontSize.subtitleCardRecom,
    },
    niveauDifficult: {
      color: theme.colors.white,
      marginBottom: 8,
      fontSize: theme.fontSize.titleSum,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      borderRadius: 10,
      width: SCREEN_WIDTH * 0.92,
      margin:20,
      marginBottom: 20,
      backgroundColor: theme.colors.purplePrimaryDark,
    },
    buttonText: {
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: 'DM-Sans',
      color: theme.colors.white,
      fontSize: theme.fontSize.subTitleSum,
    },
    endScreen: {
      height: SCREEN_HEIGHT * .01,
    }
});