import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default function FourthSlide() {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('../../../assets/intro/intro-fourthSlide.png')} />
            <Text style={styles.title}> Coucou </Text>
            <Text style={styles.desc}> Coucou </Text>
            <Button title='' />
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
        margin: 0,
        top: -200,
        height: 500,
        resizeMode: 'cover',
    },
    title: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
    },
    desc: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
    },
    button: {

    }
});
