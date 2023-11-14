import {Image, View, StyleSheet, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

export function Champion() {
    return (
       <View style={styles.container}>
           <LinearGradient style={styles.linearGradient}
                           colors={[
                               'rgba(52,43,43,0)',
                               'rgb(0,0,0)'
                           ]}
           />
           <Image  style={styles.backgroundImage} source={require('../../../assets/tempEzChamp/ez-champ-selected.png')} />
           <View style={styles.flexObligatoire}></View>
           <View style={styles.titleSubTitleIcone}>
               <View style={styles.titleSubTitle}>
                   <Text style={styles.titleChamp}>Ezreal</Text>
                   <Text style={styles.subTitle}>L'explorateur prodigieux</Text>
               </View>
                <Image source={require('../../../assets/buttons/hearth.png')} />
           </View>
           <Text style={styles.description}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
           </Text>
           <View style={styles.skillsContent}>
               <Image source={require('../../../assets/tempEzChamp/Passiva.png')} />
               <Image source={require('../../../assets/tempEzChamp/Rectangle 19.png')} />
               <Image source={require('../../../assets/tempEzChamp/Rectangle 19.png')} />
               <Image source={require('../../../assets/tempEzChamp/Rectangle 19.png')} />
               <Image source={require('../../../assets/tempEzChamp/Rectangle 19.png')} />
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
               <Image style={styles.pictureRole}/>
                <View style={styles.textInformations}>
                    <Text>AZEAZEaze</Text>
                    <Text>Attirator</Text>
                </View>
               <View style={styles.difficultInformations}>
                   <Text style={styles.textDifficult}>AZEAZEaze</Text>
                   <Text style={styles.niveauDifficult}>Attirator</Text>
                    <Image />
               </View>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#070707',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        //paddingVertical: 100
    },
    backgroundImage: {
        margin: 0,
        top: -50,
        height: 480,
        width: '100%',
        //resizeMode: 'cover',
        zIndex: 1,
        position: "absolute"
    },
    linearGradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        position:'absolute',
        height: 530,
        top: -80,
    },
    flexObligatoire: {

    },
    titleSubTitleIcone: {
        width: '100%',
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
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 4,
    },
    titleChamp: {
        color: 'white',
        fontSize: 30,
    },
    subTitle: {
      color: 'white',
    },
    description: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: 15,
        zIndex: 4,
    },
    skillsContent: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 4,
    },
    descLetterNameSpell: {
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    descSpell: {

    },
    letterSpell: {

    },
    nameSpell: {

    },
    generalInformations: {

    },
    textInformations: {

    },
    difficultInformations: {

    },
    textDifficult: {

    },
    niveauDifficult: {

    }

});