import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {BeforeSearch} from "./BeforeSearch";
import { SearchBar } from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";


export function Search() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };


  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Accueil');
  };


  return (
    <View style={styles.container}>
      <BeforeSearch />
      <View style={styles.contentSearch} >
        <TouchableOpacity
          onPress={() => { navigate() }}
          style={styles.arrowBackButton}
        >
          <Image style={styles.arrowBack}
                 source={require('../../../assets/search/arrow-back.png')}
          />
        </TouchableOpacity>
        <View style={styles.searchbarContent}>

        </View>

      </View>
    </View>
  );
}
/*

<SearchBar
  placeholder="Recherchez..."
  value={search}
  onChangeText={(text) => setSearch(text)}
  containerStyle={styles.searchbar}
  inputContainerStyle={{backgroundColor: 'white'}}
  cancelButtonProps={{}}
  cancelButtonTitle="Annuler"
  lightTheme
  showCancel
  platform="default"
  round
/>

<View style={styles.searchbar}>
  <TouchableOpacity>
    <Image style={styles.loop} source={require('../../../assets/general/loopSumNav.png')} />
  </TouchableOpacity>
</View>
*/
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'black',
  },

  contentSearch: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.33 ,
  },
  arrowBackButton: {
    width: 100,
    height: 100,
  },
  arrowBack: {

  },
  searchbarContent: {

  },

  searchbar: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: '#1E1F24',
    borderRadius: 20,
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loop: {

  },
});
