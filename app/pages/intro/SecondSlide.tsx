import React, {useEffect} from "react";
import {Animated, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";

export function SecondSlide() {

    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('ThirdSlide');
    };




    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigate();
            }}>
                <Image  style={styles.image} source={require('../../../assets/intro/intro-secondSlide.png')} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        margin: 0,
        left: -60,
        top: -200,
        height: 500,
        resizeMode: 'cover', // Assurez-vous que l'image couvre l'espace nécessaire sans être déformée
        //: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(124,247,179,0) 29%)'
    },
})