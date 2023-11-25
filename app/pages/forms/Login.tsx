import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback, Keyboard, Animated
} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {BackArrow} from "../../components/button/BackArrow";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {db} from "../../../db";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<RootStackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    const emailValue: string = email;
    const passwordValue: string = password;

    if (emailValue.trim() === '' || passwordValue.trim() === '') {
      console.log('Veuillez remplir tous les champs.');
    } else {
      console.log('email : ' + emailValue);
      console.log('password : ' + passwordValue);
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM Users WHERE invocateur = ? AND password = ?',
            [emailValue, passwordValue],
            (_, { rows }) => {
              if (rows.length > 0) {
                console.log('User found');
                navigation.navigate('Accueil');
              } else {
                console.log('User not found');
              }
            },
            (_, error) => {
              console.error('Error when selecting user', error);
              return false;
            }
          );
        });
      // navigation.navigate('Accueil');
    }
  };

  return(
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <BackArrow navigate={navigate} style={styles.backArrowButton}/>

          <View style={styles.containerBackground}>
          <Image style={styles.pictureback} source={require('../../../assets/login/pictureback-login.png')} />
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
                  style={styles.searchbar}
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />
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
});