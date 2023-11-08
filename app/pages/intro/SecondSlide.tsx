import React, {useEffect} from "react";
import {Animated, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";

export function SecondSlide() {
    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('ThirdSlide');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate();
        }, 3000); // Ajoute un délai d'une seconde avant de naviguer

        return () => clearTimeout(timer); // Nettoyez le timer lorsque le composant est démonté ou avant que l'effet s'exécute à nouveau
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigate();
            }}>
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
})