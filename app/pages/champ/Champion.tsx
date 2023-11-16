import {Image, View, StyleSheet, Text, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import React from "react";
import {useRoute} from "@react-navigation/native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {LinearGradient} from "expo-linear-gradient";




export function Champion() {
    const route = useRoute();
    // @ts-ignore
    const nom = route?.params?.nom;
    console.log({params: route?.params})

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.pictureChamp}
          source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nom}_0.jpg` }}
        />
        <View style={styles.linear}>
          <LinearGradient style={styles.linearGradient}
                          colors={[
                            'rgba(52,43,43,0)',
                            'rgb(0,0,0)'
                          ]}
          />
        </View>
        <View style={styles.flexOblig}>
        </View>
        <View style={styles.titleSubTitleIcon}>
            <View style={styles.titleSubTitle}>
                <Text style={styles.titleChamp}>{nom}</Text>
                <Text style={styles.subTitle}>L'explorateur prodigieux</Text>
            </View>
            <Image style={styles.likeChampIcon} source={require('../../../assets/buttons/hearth.png')} />
        </View>
        <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
        </Text>
      <Text style={styles.skills}>Skills</Text>
        <View style={styles.skillsContent}>
            <Image style={styles.skillsPicture} source={require('../../../assets/tempEzChamp/Passiva.png')} />
            <Image style={styles.skillsPicture} source={require('../../../assets/tempEzChamp/Passiva.png')} />
            <Image style={styles.skillsPicture} source={require('../../../assets/tempEzChamp/Passiva.png')} />
            <Image style={styles.skillsPicture} source={require('../../../assets/tempEzChamp/Passiva.png')} />
            <Image style={styles.skillsPicture} source={require('../../../assets/tempEzChamp/Passiva.png')} />
        </View>
        <View style={styles.descLetterNameSpell}>
            <Text style={styles.letterSpell}>Q</Text>
            <Text style={styles.nameSpell}>DISPARO MACHIN </Text>
            <Text style={styles.descSpell}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
            </Text>
        </View>
        <View style={styles.generalInformations}>
            <Image style={styles.pictureRole} source={require('../../../assets/tempEzChamp/Atirador.png')}/>
            <View style={styles.textRoleRoleImport}>
                <Text style={styles.role}>Rôle</Text>
                <Text style={styles.roleImport}>Tireur</Text>
            </View>
            <View style={styles.difficultInformations}>
                <Text style={styles.textDifficult}>Difficulté</Text>
                <Text style={styles.niveauDifficult}>Facile</Text>
                <Image style={styles.pictureDifficult} source={require('../../../assets/tempEzChamp/niveau.png')}/>
            </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Skins </Text>
        </TouchableOpacity>
        <View style={styles.endScreen}></View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      width: SCREEN_WIDTH,
      backgroundColor: '#070707',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pictureChamp: {
      margin: 0,
      top: 0,
      height: SCREEN_HEIGHT * .4,
      width: SCREEN_WIDTH,
      zIndex: 1,
      position: "absolute"
      //resizeMode: 'cover',
    },
    linear: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position:'absolute',
      top: SCREEN_HEIGHT * .2,

    },
    linearGradient: {
      zIndex: 2,
      width: '100%',

      height: SCREEN_HEIGHT * .2,

    },
    flexOblig: {
      height: SCREEN_HEIGHT * .35,
    },
    titleSubTitleIcon: {
      width: SCREEN_WIDTH * .92,
      display: 'flex',
      height: 100,
      //top: 350,
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