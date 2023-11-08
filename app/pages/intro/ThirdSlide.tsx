import { StatusBar } from 'expo-status-bar';
import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import {useEffect} from "react";

export default function ThirdSlide() {

    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
        navigation.navigate('FourthSlide');
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigate();
            }}>
                <LinearGradient
                    // Les couleurs du dégradé
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    // Début du dégradé à gauche
                    start={{ x: 0, y: 0 }}
                    // Fin du dégradé à droite
                    end={{ x: 1, y: 0 }}
                    // Style du dégradé
                    // ===>   style={styles.gradient}
                >
                    <Image  style={styles.image} source={require('../../../assets/intro/intro-thirthSlide.png')} />
                </LinearGradient >
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid orange',
        top: 0
    },
    image: {
        margin: 0,
        left: -60,
        top: -200,
        height: 500,
        resizeMode: 'cover', // Assurez-vous que l'image couvre l'espace nécessaire sans être déformée
        //: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(124,247,179,0) 29%)'
    },
   /*
    gradient: {
        width: '100%', // Le dégradé doit avoir la même largeur que l'image
        height: 500, // Et la même hauteur que l'image
        position: 'absolute', // Positionnement absolu pour superposer le dégradé à l'image
        left: -60,
        top: -200,
    }
    */
});
