import React, {useEffect, useRef} from 'react';
import { Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProps} from "../../../App";

export function FirstSlide() {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<StackNavigationProps>();

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
                    style={[styles.image, { transform: [{ rotate: rotation }] }]}
                    source={require('../../../assets/intro/introLogo.png')}
                />
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
    },
    image: {
        /*
        width: 100,
        right: 0,
        height: 100,r
         */
    },
});
