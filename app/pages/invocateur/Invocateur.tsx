import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
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
import { GameItem } from "./GameItem";
import {
  getAllGamesDetails,
  getlastGamesKeys,
} from "../../logic/logicLastGames";
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

  useEffect(() => {
    const fetchSummonerDetail = async () => {
      try {
        const { summonerDetail, imageRank } = await getCompleteSummonerData(invocData.id);
        const lastGamesIDList: string[] = await getlastGamesKeys(invocData.puuid);
        const lastGamesAll = await getAllGamesDetails(lastGamesIDList);
        setSummonerDetail(summonerDetail);
        setImageRank(imageRank);
        setLastGamesID(lastGamesIDList);
        setLastGamesAll(lastGamesAll);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchSummonerDetail();
  }, [invocData.id, invocData.puuid]);

  const renderGameItems = () => {
    if (!lastGamesAll) return null;
    return lastGamesAll.map((game: any, index: number) => (
      <GameItem key={index} game={game} invocData={invocData} />
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
        {imageRank && (
          <Image style={styles.rankPicture} source={imageRank} />
        )}
        <Text style={styles.position}>{summonerDetail?.rank}</Text>
      </View>
      <View style={styles.selectionSearch}>
        <Text style={styles.textSelection}>Tous</Text>
        <Text style={styles.textSelection}>Solo/Duo</Text>
        <Text style={styles.textSelection}>Flex</Text>
      </View>
      <View style={styles.divider}></View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.panelMatchHistory}>
          <ScrollView>{renderGameItems()}</ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    selectionSearch: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      backgroundColor: 'black',
    },
    textSelection: {
      color: theme.colors.white,
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
    },

  });
