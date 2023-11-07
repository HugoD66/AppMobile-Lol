import React, { useRef } from 'react';
import {Alert, Animated, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function FirstSlide() {
    // Créez une nouvelle valeur d'animation
    const rotateAnim = useRef(new Animated.Value(0)).current;

    // Démarrez l'animation de rotation
    const startRotation = () => {
        // Remettre à zéro l'animation
        rotateAnim.setValue(0);
        // Lancez une animation qui tourne l'image de manière continue
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1, // L'animation se termine à la valeur 1 après un cycle complet
                duration: 3000, // Durée de 3000ms pour chaque cycle
                useNativeDriver: true, // Utilise le driver natif pour de meilleures performances
            })
        ).start();
    };

    // Mappez la valeur d'animation interpolée à une propriété de rotation
    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'], // Rotation de 0 à 360 degrés
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                Alert.alert('Coucou');
                startRotation(); // Démarrez l'animation lorsque l'utilisateur appuie sur l'image
            }}>
                <Animated.Image // Utilisez Animated.Image au lieu de Image
                    style={[styles.image, { transform: [{ rotate: rotation }] }]} // Appliquez la rotation
                    source={require('../../../assets/intro/introLogo.png')}
                />
            </TouchableOpacity>
            <StatusBar/>
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
    },
    image: {
        width: 100, // Spécifiez une largeur
        height: 100, // et une hauteur pour l'image
    },
});
