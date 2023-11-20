import {KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";

export function Login() {
  return(
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <Image style={styles.pictureback} source={require('../../../assets/login/pictureback-login.png')} />
      </View>
      <View style={styles.contentLogin}>
        <KeyboardAvoidingView    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                 >
          <TextInput style={styles.textInput} placeholder="Tapez ici..." />
          <TextInput style={styles.textInput} placeholder="Tapez ici..." />
          <TextInput style={styles.textInput} placeholder="Tapez ici..." />
          <TouchableOpacity>
            <Text style={styles.buttonLogin}>Connexion</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>

  );
}
/*

 */
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#1f1f1f',
  },
  containerBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  pictureback: {
    width: '100%',
    position: 'absolute',
  },
  contentLogin: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 20,

    backgroundColor: 'white',
    zIndex: 4,

  },
  buttonLogin: {
    height: 80,
  },
});