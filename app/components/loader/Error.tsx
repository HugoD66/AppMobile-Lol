import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import theme from "../../../theme";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {SCREEN_WIDTH} from "../../types/screenDim";
import React from "react";
export function Error() {
  const navigation = useNavigation<RootStackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };


  return (
    <View style={styles.container}>
      <Text  style={styles.text}> Erreur pendant le chargement</Text>
      <Image style={styles.radialGradient} source={require('../../../assets/search/radial-gradient.png')} />
      <Image style={styles.icon} source={require('../../../assets/general/poro-triste.png')} />
      <TouchableOpacity style={styles.button} onPress={() => { navigate() }}>
        <Text style={styles.buttonText}>Retour Accueil</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  radialGradient: {
    position: 'absolute',
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSize.titleSum,
    textAlign: 'center',
  },
  icon: {
    marginTop: '10%',
    width: 100,
    height: 100,
  },
  button: {
    position: 'absolute',
    bottom: '10%',
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