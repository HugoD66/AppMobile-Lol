import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {LinearGradient} from "expo-linear-gradient";
import {BeforeSearch} from "./BeforeSearch";
import {SearchBar} from "react-native-screens";


export function Search() {

  return (
    <View style={styles.container}>
      <BeforeSearch />
      <View style={styles.contentSearch} >
        <TouchableOpacity>
          <Image style={styles.arrowBack} source={require('../../../assets/search/arrow-back.png')} />
        </TouchableOpacity>
        <View style={styles.searchbarContent}>
          <View style={styles.searchbar}>
            <TouchableOpacity>
              <Image style={styles.loop} source={require('../../../assets/general/loopSumNav.png')} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
}

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
