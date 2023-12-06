import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {BackArrow} from "../../components/button/BackArrow";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {db} from "../../../db";
import {LinearGradient} from "expo-linear-gradient";
import theme from "../../../theme";
import {getSummonerData} from "../../logic/logicInvoc";
import {InvocDataInterface} from "../../types/InvocDataInterface";

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
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM Users WHERE invocateur = ? AND password = ?',
            [invocateurValue, passwordValue],
            async (_, {rows}) => {
              if (rows.length > 0) {
                setUser(rows._array[0].invocateur);
                const summonerData: InvocDataInterface = await getSummonerData(invocateurValue);
                console.log('Good summonerData');
                /*
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                console.log(summonerData)
                 */
                navigation.navigate('Accueil', {
                  invocateur: {
                    id: summonerData.id,
                    name: summonerData.name,
                    summonerLevel: summonerData.summonerLevel,
                    profileIconId: summonerData.profileIconId,
                  }
                });
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
              <View>
                <Text style={styles.searchLabel}>Nom d'invocateur</Text>
                <TextInput
                  style={styles.searchbar}
                  value={invocateur}
                  onChangeText={(text) => setInvocateur(text)}
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
    zIndex: 10,
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
  contentLogin: {
    position: 'absolute',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    flex: 1,
    zIndex: 5,
    width: SCREEN_WIDTH,
  },
  contentForm: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: SCREEN_HEIGHT * .3,
  },
  searchLabel: {
    color: theme.colors.white,
    fontFamily: 'DM-Sans',
    marginBottom: theme.spacing.f,
  },
  searchbar: {
    width: SCREEN_WIDTH * 0.90,
    height: 60,
    color: theme.colors.white,
    backgroundColor: theme.colors.backForm,
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
    width: SCREEN_WIDTH,
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: SCREEN_HEIGHT * .3,
  },
  linearGradient: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * .2,
  },
});