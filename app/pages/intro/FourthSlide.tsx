import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default function FourthSlide() {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.linearGradient}
                            colors={[
                                'rgba(52,43,43,0)',
                                'rgb(0,0,0)'
                            ]}
           />
            <Image style={styles.image} source={require('../../../assets/intro/intro-fourthSlide.png')} />
            <Text style={styles.title}>Élevez votre elo rapidement </Text>
            <Text style={styles.desc}> Assurez-vous de regarder l'application qui vous fera passer au niveau supérieur </Text>
            <TouchableOpacity style={styles.button} onPress={() => { /* handle press */ }}>
                <Text>azefa aa faf</Text>
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
        height: '100%'
    },
    image: {
        margin: 0,
        top: -250,
        height: 700,
        resizeMode: 'cover',
        zIndex: 1,
        position: 'absolute'
    },
    linearGradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        position:'absolute',
        height: 530,
        top: -80,
    },
    title: {
        width: '60%',
        zIndex: 3,
        color: 'white',
        textAlign: 'center',
        bottom: -125,
        //fontFamily: 'DM Sans',
        fontSize: 32,
    },
    desc: {
        textAlign: 'center',
        color: '#B3B0B8',
        fontWeight: "light",
        letterSpacing: 2,
        bottom: -150,
        width: '70%',
        fontSize: 16,
        //fontFamily: 'Calibri'
    },
    button: {
        zIndex: 6,
        bottom: -280,
        width: '90%',
        height: '18%',
        backgroundColor: 'rgb(72,0,255)',
    }

});
