import React, {useRef, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {BeforeSearch} from "./BeforeSearch";
import { SearchBar } from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";
import { Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {AfterSearch} from "./AfterSearch";


export function Search() {
  const [search, setSearch] = useState('');
  const opacityAnimBefore = useRef(new Animated.Value(1)).current;
  const opacityAnimAfter = useRef(new Animated.Value(0)).current;
  const [activeOption, setActiveOption] = useState('Champions');

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setActiveOption(option);
  };

  const handleSearchChange = (text: any): void | string | null | undefined => {
    if (text !== null && text !== undefined) {
      setSearch(text);
      Animated.timing(opacityAnimBefore, {
        toValue: text.length === 0 ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacityAnimAfter, {
        toValue: text.length === 0 ? 0 : 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.contentSearch}>
          <TouchableOpacity onPress={() => navigate()} style={styles.arrowBackButton}>
            <Image style={styles.arrowBack} source={require('../../../assets/search/arrow-back.png')} />
          </TouchableOpacity>
          <
          // @ts-ignore
          SearchBar
          placeholder="Recherchez..."
          value={search}
          // @ts-ignore
          onChangeText={handleSearchChange}
          style={styles.searchbar}
          inputContainerStyle={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_HEIGHT * 0.07,
            borderRadius: 14,
            backgroundColor: 'transparent',
            margin: 3,
            padding: 0,
            zIndex: 3,
          }}
          cancelButtonProps={{}}
          cancelButtonTitle="Annuler"
          showCancel
          platform="default"
          />
          <ScrollView horizontal >
            <View style={styles.selectionSearchList}>
              <TouchableOpacity onPress={() => handleOptionChange('Champions')}>
                <Text style={[styles.selectionSearch, { fontWeight: activeOption === 'Champions' ? '500' : '200' }]}>
                  Champions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionChange('Pros')}>
                <Text style={[styles.selectionSearch, { fontWeight: activeOption === 'Pros' ? '500' : '200' }]}>
                  Pros
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionChange('Runetarra')}>
              <Text style={[styles.selectionSearch, { fontWeight: activeOption === 'Runetarra' ? '500' : '200' }]}>
                Players
              </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionChange('Skins')}>
              <Text style={[styles.selectionSearch, { fontWeight: activeOption === 'Skins' ? '500' : '200' }]}>
                Teams
              </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.divider} />
        </View>
        <View style={styles.contentBeforeAfter}>
          <Animated.View style={[styles.beforeSearchContainer, { opacity: opacityAnimBefore }]}>
            <BeforeSearch />
          </Animated.View>
          <Animated.View style={[styles.afterSearchContainer, { opacity: opacityAnimAfter }]}>
            <AfterSearch />
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>

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
    height: SCREEN_HEIGHT * 0.23,

  },
  arrowBackButton: {
    margin: 20,
    width: 20,
    height: 20,
    right: SCREEN_WIDTH * 0.38,
  },
  arrowBack: {
    width: 20,
    height: 20,
  },
  searchbar: {
    opacity: 1,

  },
  beforeSearchContainer: {
    width: '100%',

  },
  selectionSearchList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.05,
  },
  selectionSearch: {
    fontSize: 20,
    padding: 8,
    margin: 'auto',
    fontWeight: 'bold',
    color: 'white',

  },
  divider: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: '#545662',

    //marginBottom: 20,
  },
  contentBeforeAfter: {
    marginTop: 20,
  },
  afterSearchContainer: {

  },
  afterSearchBlock: {

  }
});
