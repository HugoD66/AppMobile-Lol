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
           <Image  style={styles.backgroundImage} source={require('../../../assets/temp/ez-champ-selected.png')} />
           <View style={styles.titleSubTitleIcone}>
               <View style={styles.titleSubTitle}>
                   <Text style={styles.titleChamp}>Ezreal</Text>
                   <Text style={styles.subTitle}>L'explorateur prodigieux</Text>
               </View>
                <Image source={require('../../../assets/buttons/hearth.png')} />
           </View>
           <Text style={styles.description}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
           </Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#070707',
        flex: 1,
        //paddingVertical: 100
    },
    backgroundImage: {
        margin: 0,
        top: -50,
        height: 480,
        width: '100%',
        //resizeMode: 'cover',
        zIndex: 1,
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
        backgroundColor: 'orange',
        zIndex: 4,

    },
});