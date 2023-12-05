import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../../App";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { ButtonOneProps } from "../../types/ButtonOneProps";
import theme from "../../../theme";
export function ButtonOne({ style, ...otherProps }: ButtonOneProps) {

    const navigation = useNavigation<RootStackNavigationProps>();
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
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH * .92,
        height: 70,
        borderRadius: 10,
        backgroundColor: theme.colors.purplePrimary,

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: theme.colors.white,
        fontSize: theme.fontSize.subTitleSum,
    },
});