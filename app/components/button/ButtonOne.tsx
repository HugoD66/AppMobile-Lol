import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {ButtonOneProps} from "../../types/ButtonOneProps";

export function ButtonOne({ style, ...otherProps }: ButtonOneProps) {
    const navigation = useNavigation<StackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
        navigation.navigate('Accueil');
    };

    return (
        <TouchableOpacity style={StyleSheet.flatten([styles.button, style])}     onPress={() => { navigate() }}>
            <Text style={styles.buttonText}>C'est parti ! </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: SCREEN_WIDTH * .92,
        height: 76,
        backgroundColor: '#8B00FF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize: 16,
    },

});