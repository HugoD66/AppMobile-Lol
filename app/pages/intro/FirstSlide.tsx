import { StatusBar } from 'expo-status-bar';
import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
export default function FirstSlide() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert('Coucou')}>
                <Image source={require('../../../assets/intro/introLogo.png')} />
            </TouchableOpacity>
            <StatusBar style="auto" />
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
});
