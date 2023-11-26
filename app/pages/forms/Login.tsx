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
import {LinearGradient} from "expo-linear-gradient";

export function Login() {
  const [invocateur, setInvocateur] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const navigation = useNavigation<RootStackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    const invocateurValue: string = invocateur;
    const passwordValue: string = password;

    if (invocateurValue.trim() === '' || passwordValue.trim() === '') {
      setError('Veuillez remplir tous les champs.');
    } else {
      console.log('email : ' + invocateurValue);
      console.log('password : ' + passwordValue);
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM Users WHERE invocateur = ? AND password = ?',
            [invocateurValue, passwordValue],
            (_, { rows }) => {
              if (rows.length > 0) {
                setUser(rows._array[0].invocateur);
                console.log('User found');
                console.log(invocateurValue);
                console.log(invocateur);
                navigation.navigate('Accueil', { invocateur: invocateurValue });
              } else {
                setError('Nom d\'invocateur ou mot de passe incorrect.');
              }
            },
            (_, error) => {
              setError('Veuillez remplir tous les champs.');
              return false;
            }
          );
        });
    }
  };

  return(
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <BackArrow navigate={navigate} style={styles.backArrowButton}/>
          <View style={styles.containerBackground}>
          <Image style={styles.pictureback} source={require('../../../assets/forms/pictureback-login.png')} />
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
                <Text style={styles.searchLabel}>Nom d'invocateur</Text>
                <TextInput
                  style={styles.searchbar}
                  value={invocateur}
                  onChangeText={(text) => setInvocateur(text)}
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