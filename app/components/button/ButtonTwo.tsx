import {Image, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";

export function ButtonTwo() {
   return (
       <TouchableOpacity style={styles.button}>
           <Image style={styles.pictureButton} source={require('../../../assets/buttons/just_button.png')} />
       </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    button: {
        zIndex: 6,
        bottom: '-33%',
        width: '15%',
        backgroundColor: 'rgb(72,0,255)',
        margin: 'auto',
    },
    pictureButton: {
        margin: 'auto',
        width: '100%',

    }
});