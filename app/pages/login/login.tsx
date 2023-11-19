import {KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";

export function Login() {
  return(
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <Image style={styles.pictureback} source={require('../../../assets/login/pictureback-login.png')} />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput style={styles.textInput} placeholder="Tapez ici..." />
        <TextInput style={styles.textInput} placeholder="Tapez ici..." />
        <TextInput style={styles.textInput} placeholder="Tapez ici..." />
        <TouchableOpacity>
          <Text style={styles.buttonLogin}>Connexion</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

  );

}
const styles = StyleSheet.create({
  containerBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    backgroundColor: '#050505',
    alignItems: 'center',
  },
  pictureback: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'contain',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    zIndex: 3,
  },
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInput: {
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',

  },
  buttonLogin: {
    height: 80,
    backgroundColor: 'black',
    zIndex: 4,
  },
});