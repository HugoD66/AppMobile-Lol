import React, {useEffect} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {IntroStackNavigationProps} from "../../../App";
import {LinearGradient} from "expo-linear-gradient";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export function SecondSlide() {

    const navigation = useNavigation<IntroStackNavigationProps>();
    const navigate = () => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('ThirdSlide');
    };

    const [fontsLoaded] = useFonts({
        'DM-Sans': require('../../../assets/fonts/DMSans.ttf'),
    });

    useEffect(() => {
        const loadFonts = async () => {
            await SplashScreen.hideAsync();
        };
        loadFonts();
    }, []);

    return (
    <View style={styles.container}>
        <View>
            <Image
                style={styles.pictureChamp}
                source={require('../../../assets/intro/intro-secondSlide.png')}
            />
            <LinearGradient style={styles.linear}
                colors={[
                    'rgba(52,43,43,0)',
                    'rgb(0,0,0)'
                ]}
            />
        </View>
        <View style={styles.section}>
            <Text style={styles.title}>Choisissez les meilleurs champions</Text>
            <Text style={styles.desc}> Les meilleurs champions, builds, match-ups et tout ce dont vous avez besoin pour vous améliorer dans le jeu. </Text>
            <TouchableOpacity onPress={() => { navigate() }}>
                <Image style={styles.pictureButton} source={require('../../../assets/buttons/just_button.png')} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#070707',
    },
    pictureChamp: {
        height: SCREEN_HEIGHT * .61,
        width: SCREEN_WIDTH,
    },
    linear: {
        position:'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
    },
    section: {
        alignItems: 'center',
    },
    title: {
        marginHorizontal: 38,
        marginBottom: 16,
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'DM Sans'
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        fontWeight: "100",
        fontSize: 16,
        lineHeight: 24,
        marginHorizontal: 50,
        marginBottom: 22,
    },
    pictureButton: {
        width: 56,
        height: 56,
    }
})