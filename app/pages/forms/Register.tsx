import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import {BackArrow} from "../../components/button/BackArrow";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {db} from "../../../db";
import {LinearGradient} from "expo-linear-gradient";

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    const emailValue: string = email;
    const passwordValue: string = password;

    if (emailValue.trim() === '' || passwordValue.trim() === '') {
      setError('Veuillez remplir tous les champs.');
    } else {
      console.log('email : ' + emailValue);
      console.log('password : ' + passwordValue);
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Users (invocateur, password) VALUES (?, ?)',
          [emailValue, passwordValue],
          (_, { rows }) => {
            console.log('User created');
            navigation.navigate('Accueil');
          },
          (_, error) => {
            setError('Veuillez remplir tous les champs.');
            return false;
          }
        );
        //Récupérer les données
        tx.executeSql(
          'SELECT * FROM Users',
          [],
          (_, { rows }) => console.log(rows)
        );
      });
      // navigation.navigate('Accueil');
    }
  };

  const navigation = useNavigation<RootStackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <BackArrow navigate={navigate} style={styles.backArrowButton}/>
        <View style={styles.containerBackground}>
          <Image style={styles.pictureback} source={require('../../../assets/forms/pictureBack-register.png')} />
          <View style={styles.linear}>
            <LinearGradient style={styles.linearGradient} colors={['rgba(52,43,43,0)', 'rgb(0,0,0)']} />
          </View>
        </View>
        <View style={styles.contentLogin}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
          >
            <Image style={styles.pictureLogo} source={require('../../../assets/intro/introLogo.png')} />
            <View style={styles.contentForm}>
              <View style={styles.contentSearch}>
                <Text style={styles.searchLabel}>Email</Text>
                <TextInput
                  style={styles.searchbar}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.contentSearch}>
                <Text style={styles.searchLabel}>Password</Text>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  style={styles.searchbar}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { onSubmit() }}>
              <Text style={styles.buttonText}>C'est parti ! </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#000000',
  },
  backArrowButton: {
    position: "absolute",
    top: -200,
    left: -80,
    zIndex: 20,
  },
  containerBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  pictureback: {
    width: '100%',
    position: 'absolute',
  },
  keyboardAvoidingView: {
    flex: 1,
    height: SCREEN_HEIGHT * .9,
    width: SCREEN_WIDTH,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pictureLogo: {
    top: '8%',
  },
  contentLogin: {
    position: 'absolute',
    flex: 1,
    width: SCREEN_WIDTH,
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    zIndex: 5,

  },
  contentForm: {
    height: SCREEN_HEIGHT * .3,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  contentSearch: {
  },
  searchLabel: {
    color: 'white',
  },
  searchbar: {
    color: 'white',
    height: 60,
    width: SCREEN_WIDTH * 0.90,
    backgroundColor: '#1E1724',
  },
  customButtonComponent: {
    marginTop: '10%',
  },
  button: {
    width: SCREEN_WIDTH * .92,
    height: 70,
    backgroundColor: '#8B00FF',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linear: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top: SCREEN_HEIGHT * .3,
  },
  linearGradient: {
    zIndex: 2,
    width: '100%',
    height: SCREEN_HEIGHT * .2,

  },
});