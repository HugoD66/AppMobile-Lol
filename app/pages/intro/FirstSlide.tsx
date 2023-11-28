import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IntroStackNavigationProps } from "../../../App";
import { SCREEN_WIDTH } from "../../types/screenDim";

export function FirstSlide() {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<IntroStackNavigationProps>();

    const animateAndNavigate = () => {
        rotateAnim.setValue(0);
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            console.log({navigation: navigation.getState()})
            navigation.navigate('SecondSlide');
        });
    };

    useEffect(() => {
        animateAndNavigate()
    }, [])

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                animateAndNavigate();
            }}>
                <Animated.Image
                    style={[ { transform: [{ rotate: rotation }] }]}
                    source={require('../../../assets/intro/introLogo.png')}
                />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
