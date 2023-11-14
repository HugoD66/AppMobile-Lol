import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";

export function ButtonOne() {
    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
        navigation.navigate('Accueil');
    };

    return (
        <TouchableOpacity style={styles.button}     onPress={() => { navigate() }}>
            <Text style={styles.buttonText}>C'est parti ! </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        zIndex: 6,
        bottom: -280,
        width: '90%',
        height: '18%',
        backgroundColor: '#8B00FF',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        height: '100%',
        //margin: 'auto',
    },
});