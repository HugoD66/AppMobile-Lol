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
import {StackNavigationProps} from "../../../App";
import {ButtonOne} from "../../components/button/ButtonOne";

export function Login() {
  const [search, setSearch] = useState('');

  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };


  return(
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <BackArrow navigate={navigate} style={styles.backArrowButton}/>

          <View style={styles.containerBackground}>
          <Image style={styles.pictureback} source={require('../../../assets/login/pictureback-login.png')} />
        </View>
        <View style={styles.contentLogin}>
          <Image style={styles.pictureLogo} source={require('../../../assets/intro/introLogo.png')} />
          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoidingView}
          >

            <View style={styles.contentSearch}>
            <Text>Email</Text>
            <TextInput
                value={search}
                style={styles.searchbar}
            />
            </View>
            <View style={styles.contentSearch}>
            <Text>Password</Text>
            <TextInput
                value={search}
                style={styles.searchbar}
            />
            </View>
            <ButtonOne style={styles.customButtonComponent} />
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
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentLogin: {
    position: 'absolute',
    flex: 1,
    width: SCREEN_WIDTH,
    display: 'flex',
    margin: 'auto',
    backgroundColor: 'rgba(182,128,128,0.27)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  searchbar: {
    color: 'white',
    height: 60,
    width: SCREEN_WIDTH * 0.90,
    backgroundColor: '#1E1724',
  },
  pictureLogo: {
    //top: '16%',
  },
  customButtonComponent: {
    bottom: 60,
  },
  contentSearch: {

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