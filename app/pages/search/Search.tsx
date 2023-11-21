import React, {useRef, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {BeforeSearch} from "./BeforeSearch";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import { Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {AfterSearch} from "./AfterSearch";
import {BackArrow} from "../../components/button/BackArrow";

export function Search() {
  const [search, setSearch] = useState('');
  const opacityAnimBefore = useRef(new Animated.Value(1)).current;
  const opacityAnimAfter = useRef(new Animated.Value(0)).current;
  const [activeOption, setActiveOption] = useState('Champions');
  const [showLoop, setShowLoop] = useState(true);

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setActiveOption(option);
  };

  const handleSearchChange = (text: string) => {
      setShowLoop(text.length === 0)
      Animated.timing(opacityAnimBefore, {
        toValue: text.length === 0 ? 1 : 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacityAnimAfter, {
        toValue: text.length === 0 ? 0 : 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    return setSearch(text);
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const navigation = useNavigation<RootStackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Accueil');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.contentSearch}>
          <BackArrow navigate={navigate} />
          <TextInput
          placeholder="Recherchez..."
          value={search}
          onChangeText={handleSearchChange}
          style={styles.searchbar}
          />
            {showLoop && <Image style={styles.loop} source={require('../../../assets/general/loopSumNav.png')} />}
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
          {search.length === 0 ? (
              <Animated.View style={[styles.beforeSearchContainer, { opacity: opacityAnimBefore }]}>
              <BeforeSearch />
            </Animated.View>
              ) : (
          <Animated.View style={[styles.afterSearchContainer, { opacity: opacityAnimAfter }]}>
            <AfterSearch />
          </Animated.View>
                )}
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
  loop: {
    top: -40,
    marginLeft: SCREEN_WIDTH * 0.75,
  },
  contentSearch: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.28,
  },
  searchbar: {
    color: 'white',
    height: 60,
    width: SCREEN_WIDTH * 0.90,
    backgroundColor: '#1E1724',
  },
  selectionSearchList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.08,
  },
  selectionSearch: {
    fontSize: 20,
    padding: 6,
    margin: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  divider: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: '#545662',
  },
  contentBeforeAfter: {
    marginTop: 20,
  },
  afterSearchBlock: {
    width: '100%',
  },
  afterSearchContainer: {
    width: '100%',
  },
  beforeSearchContainer: {
    width: '100%',
  },
});
