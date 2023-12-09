import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator, TouchableOpacity,
} from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../types/screenDim";
import theme from "../../../theme";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../../App";
import { CompleteInvocDataInterface } from "../../types/InvocDataInterface";
import {
  getCompleteSummonerData,
} from "../../logic/logicInvoc";
import { Error } from "../../components/loader/Error";
import {GameUnit} from "./GameUnit";
import {
  getAllGamesDetails,
  getlastGamesKeys,
} from "../../logic/logicLastGames";
import { Pie } from 'react-native-progress';

type InvocRouteProps = RouteProp<StackParamList, 'Invocateur'>



export function Invocateur({ route }: { route: InvocRouteProps }) {
  const { invocateur } = route.params || {};
  const invocData = invocateur || {};
  if (!invocData) return <Error />;

  const [summonerDetail, setSummonerDetail] = useState<CompleteInvocDataInterface | null>(null);
  const [imageRank, setImageRank] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastGamesID, setLastGamesID] = useState<string[] | null>(null);
  const [lastGamesAll, setLastGamesAll] = useState<any>(null);
  const [selectedGameMode, setSelectedGameMode] = useState('ALL');
  const [selectedOption, setSelectedOption] = useState('CLASSIC');

  useEffect(() => {
    const fetchSummonerDetail = async () => {
      try {
        // @ts-ignore
        const { summonerDetail, imageRank } = await getCompleteSummonerData(invocData.id);
        const lastGamesIDList: string[] = await getlastGamesKeys(invocData.puuid);
        const lastGamesAll = await getAllGamesDetails(lastGamesIDList);
        setSummonerDetail(summonerDetail);
        setImageRank(imageRank);
        setLastGamesID(lastGamesIDList);
        setLastGamesAll(lastGamesAll);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchSummonerDetail();
  }, [invocData.id, invocData.puuid]);

  const renderGamesList = (selectedGameMode: string) => {
    if (!lastGamesAll) return null;
    let filteredGames;
    if (selectedGameMode === 'ALL') {
      filteredGames = lastGamesAll;
    } else {
      filteredGames = lastGamesAll.filter((game: { detailMatchInfo: { gameMode: string; }; }) => game.detailMatchInfo.gameMode === selectedGameMode);
    }
    return filteredGames.map((game: any, index: number) => (
      <GameUnit key={index} game={game} invocData={invocData} selectedGameMode={selectedGameMode} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.sumNav}>
        <View style={styles.sumIconAndLevel}>
          <Image
            style={styles.sumIcon}
            source={{
              uri: `https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${invocData.profileIconId}.jpg`,
            }}
          />
          <Text style={styles.level}>{invocData.summonerLevel}</Text>
        </View>
        <View style={styles.nameRegion}>
          <Text style={styles.name}>{invocData.name}</Text>
          <Text style={styles.region}>#EUW</Text>
        </View>
        <View style={styles.rankPosition}></View>
        {imageRank ? (
          <Image style={styles.rankPicture} source={imageRank} />
        ) : (
          <Pie
            size={50}
            indeterminate={true}
            color={theme.colors.purplePrimary}
          />
        )}
        <Text style={styles.position}>{summonerDetail?.rank}</Text>
      </View>
      <ScrollView
        style={styles.responsiveButtons}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={[
            styles.touchableSelection,
            selectedOption === 'CLASSIC' ? styles.selectedOption : null,
          ]}
          onPress={() => {
            setSelectedOption('CLASSIC');
            setSelectedGameMode('CLASSIC');
          }}
        >
          <Text style={styles.textSelection}>Classic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableSelection,
            selectedOption === 'ARAM' ? styles.selectedOption : null,
          ]}
          onPress={() => {
            setSelectedOption('ARAM');
            setSelectedGameMode('ARAM');
          }}
        >
          <Text style={styles.textSelection}>Aram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableSelection,
            selectedOption === 'ALL' ? styles.selectedOption : null,
          ]}
          onPress={() => {
            setSelectedOption('ALL');
            setSelectedGameMode('ALL');
          }}
        >
          <Text style={styles.textSelection}>ALL</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.divider}></View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.panelMatchHistory}>
          <ScrollView>{renderGamesList(selectedGameMode)}</ScrollView>
        </View>
  )}
    </View>
  );
}

const styles = StyleSheet.create({
  touchableSelection: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 50,
    backgroundColor: 'red',
  },
  responsiveButtons: {
    width: SCREEN_WIDTH,
    maxHeight: 50,
  },
  textSelection: {
    color: theme.colors.white,
    fontSize: 20,
    textAlign: 'center',
    height: 50,
  },
  selectedOption: {
    borderBottomColor: theme.colors.purplePrimary,
    borderBottomWidth: 2,
  },
  marginBot: {
    height: 100,
  },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      backgroundColor: theme.colors.black,
    },
    sumNav: {
      width: SCREEN_WIDTH,
      height: 200,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.i,
      //padding:0,
      marginTop : 10,
    },
    sumIconAndLevel: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sumIcon: {
      width: 100,
      height: 100,
      borderRadius: 360,
      marginRight: 10,
    },
    level: {
      backgroundColor: theme.colors.black,
      color: theme.colors.white,
      fontSize: theme.fontSize.subTitleCard,
      bottom: 10,
    },
    nameRegion: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: 30,
    },
    name: {
      color: 'white',
      fontSize: 26,
      zIndex: 3,
      textAlign: 'center',
    },
    region: {
      color: 'white',
      textAlign: 'center',
    },
    rankPosition: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rankPicture: {
      width: 400,
      height: 400,
      zIndex: 2,
      right: 110,
    },
    position: {
      color: 'white',
      fontSize: 16,
    },
    divider: {
      height: 2,
      width: SCREEN_WIDTH,
      backgroundColor: theme.colors.purplePrimary,
    },
    panelMatchHistory: {
      backgroundColor: theme.colors.blackThree,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT - 250,
      maxHeight: 'auto',
    },
  }
);
