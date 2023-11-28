import React, {useRef, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../types/screenDim";
import {BeforeSearch} from "./BeforeSearch";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import { Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {BackArrow} from "../../components/button/BackArrow";
import axios from "axios";
import {APIKey} from "../../../APIKey";
import { ChampionDataInterface } from '../../types/ChampionDataInterface';
import { InvocDataInterface } from "../../types/InvocDataInterface";
import { ResultSearchChamp } from "./ResultSearchChamp";
import { ResultSearchInvoc } from "./ResultSearchInvoc";
import {GetChampionByName} from "../../logic/logicChamp";


export function Search() {
  const [search, setSearch] = useState('');
  const opacityAnimBefore = useRef(new Animated.Value(1)).current;
  const opacityAnimAfter = useRef(new Animated.Value(0)).current;
  const [activeOption, setActiveOption] = useState('Champions');  const [showLoop, setShowLoop] = useState(true);
  const [invocData, setInvocData] = useState<InvocDataInterface | null>(null);
  const [championDataList, setChampionDataList] = useState<ChampionDataInterface[]>([]);


  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setActiveOption(option);
  };

  const handleSearchChange = async (text: string) => {
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
    setSearch(text);



    if (text.length > 0 && activeOption === 'Champions') {
      try {
        const dataChampionArray = await GetChampionByName(text);
        if (dataChampionArray.length > 0) {
          setChampionDataList(dataChampionArray.map(champion => ({
            name: champion.name,
            full: champion.imageUrl, // ou une autre logique de correspondance
            title: champion.title,
            id: champion.id
            // Ajoutez d'autres champs si nécessaire
          })));
        } else {
          setChampionDataList([]); // Aucun champion trouvé
        }
      } catch (error) {
        console.error(error);
        setChampionDataList([]); // En cas d'erreur
      }
    }
    if (text.length > 0 && activeOption === 'Players') {
      try {
        const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${text}?api_key=${APIKey}`;
        const response = await axios.get(url);
        console.log(response.data);
        setInvocData({
          idInvoc: response.data.id,
          name: response.data.name,
          profileIconId: response.data.profileIconId,
          summonerLevel: response.data.summonerLevel,
        });
      } catch (error) {
        console.error(error);
      }
    }
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
            <View style={styles.searchbarContent} >
            <TextInput
                placeholder="Recherchez..."
                placeholderTextColor={'white'}
                value={search}
                onChangeText={handleSearchChange}
                style={styles.searchbar}
            />
            {search.length > 0 && (
                <Image style={styles.searchDots} source={require('../../../assets/search/loading.gif')} />
            )}
            {showLoop && <Image style={styles.loop} source={require('../../../assets/general/loopSumNav.png')} />}
            </View>
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
                <TouchableOpacity onPress={() => handleOptionChange('Players')}>
                  <Text style={[styles.selectionSearch, { fontWeight: activeOption === 'Players' ? '500' : '200' }]}>
                    Players
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOptionChange('Teams')}>
                  <Text style={[styles.selectionSearch, { fontWeight: activeOption === 'Teams' ? '500' : '200' }]}>
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
                  {championDataList && activeOption === 'Champions' && (
                      <ResultSearchChamp championData={championDataList} />
                  )}
                  {invocData && activeOption === 'Players' && (
                      <ResultSearchInvoc invocData={invocData} />
                  )}

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
    position: "absolute",
    top: 16,
    left: 16,
    height: 28,
    width: 28,
  },
  searchDots: {
    position: 'absolute',
    top: 25,
    left: 16,
    width: 30,
    height: 8,
  },
  contentSearch: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.28,
  },
  searchbarContent: {
    width: SCREEN_WIDTH * 0.90,
    backgroundColor: '#1E1724',
    height: 60,
  },
  searchbar: {
    color: 'white',
    height: 60,
    fontSize: 16,
    backgroundColor: '#1E1724',
    marginLeft: 60,
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
    bottom: 20,
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