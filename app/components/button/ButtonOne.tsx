import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";

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
/*
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
*/
const styles = StyleSheet.create({
    button: {
        width: SCREEN_WIDTH * .92,
        height: 76,
        backgroundColor: '#8B00FF',
        margin: 20,
        marginBottom: 20,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -270,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 6,
        fontWeight: 'bold',
        fontSize: 16,
    },

});