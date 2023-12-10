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
import theme from "../../../theme";

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
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Users (invocateur, password) VALUES (?, ?)',
          [emailValue, passwordValue],
          (_, { rows }) => {
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
      navigation.navigate('Accueil');
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
        <View style={styles.contentRegister}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
          >
            <Image style={styles.pictureLogo} source={require('../../../assets/intro/introLogo.png')} />
            <View style={styles.contentForm}>
              <View>
                <Text style={styles.searchLabel}>Email</Text>
                <TextInput
                  style={styles.searchbar}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View>
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
    backgroundColor: theme.colors.black,
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
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
  keyboardAvoidingView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * .9,
  },
  pictureLogo: {
    top: '8%',
  },
  contentRegister: {
    position: 'absolute',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 0,
    zIndex: 10,
    width: SCREEN_WIDTH,
  },
  contentForm: {
    height: SCREEN_HEIGHT * .3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchLabel: {
    color: theme.colors.white,
    fontFamily: 'DM-Sans',
    marginBottom: 14,
  },
  searchbar: {
    height: 60,
    width: SCREEN_WIDTH * 0.90,
    backgroundColor: theme.colors.backForm,
    color: theme.colors.white,
  },
  customButtonComponent: {
    marginTop: '10%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderRadius: 10,
    width: SCREEN_WIDTH * .92,
    backgroundColor: theme.colors.purplePrimary,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'DM-Sans',
    fontSize: theme.fontSize.subTitleSum,
    color: theme.colors.white,
  },
  errorText: {
    marginTop: '2%',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: theme.fontSize.subTitleSum,
    color: theme.colors.red,
  },
  linear: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top: SCREEN_HEIGHT * .3,
  },
  linearGradient: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * .2,

  },
});