import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../../theme";
import {GetChampIcone} from "../../logic/logicChamp";
//@ts-ignore
export function GameItem({ game, invocData }) {
  const participantsList = game.detailMatchInfo.participants;

  if (!participantsList || participantsList.length === 0) {
    return (
      <View style={styles.contentGame}>
        <View style={styles.infoGame}>
          <Text>NOP</Text>
        </View>
      </View>
    );
  }

  const participant = participantsList.find(
    (participant: { puuid: any; }) => participant.puuid === invocData.puuid
  );

  const getChampionIcon = async () => {
    try {
      const championIcon = await GetChampIcone({ champ: participant.championName });
      return championIcon;
    } catch (error) {
      console.error("Error fetching champion icon:", error);
      return null; // Gérer l'erreur de manière appropriée
    }
  }
  if (!participant) {
    return (
      <View style={styles.contentGame}>
        <View style={styles.infoGame}>
          <Text>Participant not found</Text>
        </View>
      </View>
    );
  }

  // CALCUL DIFFERENCE DE TEMPS
  const gameStartTimeStamp = game.detailMatchInfo.gameStartTimestamp;
  const currentTimeStamp = new Date().getTime();
  const timeDifferenceInDays = Math.floor((currentTimeStamp - gameStartTimeStamp) / (1000 * 60 * 60 * 24));


  const championIcone = `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${participant.championName}.png`;
  return (
    <View
      style={[
        styles.contentGame,
        { backgroundColor: participant.win ? theme.colors.gameWin : theme.colors.gameLoose },
      ]}
    >
      <Image
        style={styles.pictureChamp}
        source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
      />
      <View style={styles.contentInformationsGame}>
        <View style={styles.iconsMasteriesKDA}>
          <View style={styles.sumMasteriesIcons}>
            <Image
              style={styles.icon}
              source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
            />
            <Image
              style={styles.icon}
              source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
            />
            <Image
              style={styles.icon}
              source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
            />
            <Image
              style={styles.icon}
              source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
            />
          </View>
          <View style={styles.kda}>
            <Text style={styles.kdaText}>
              {participant.kills} /
              {participant.deaths}/
              {participant.assists}
            </Text>
            <Text style={styles.kdaText}>{parseFloat(participant.challenges.kda).toFixed(2)} KDA</Text>
          </View>
        </View>
        <View style={styles.items}>
          <Image
            style={styles.iconItems}
            source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
          />
          <Image
            style={styles.iconItems}
            source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
          />
          <Image
            style={styles.iconItems}
            source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
          />
          <Image
            style={styles.iconItems}
            source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
          />
          <Image
            style={styles.iconItems}
            source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
          />
          <Image
            style={styles.iconItems}
            source={require("../../../assets/tempEzChamp/tempInvocScreen/Champ.png")}
          />
        </View>
      </View>
      <View style={styles.infoGame}>
        <Text>{game.detailMatchInfo.gameMode}</Text>
        <Text>{participant.win ? 'VICTOIRE' : 'DEFAITE'}</Text>
        <Text>Il y a {timeDifferenceInDays} jours</Text>
        <Text>{(game.detailMatchInfo.gameDuration / 60).toFixed(1)} min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentGame: {
    marginTop: 16,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
    borderRadius: 16,
    backgroundColor: theme.colors.gameLoose,
  },
  pictureChamp: {
    height: 115,
    width: 115,
    borderRadius: 16,
  },
  contentInformationsGame: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconsMasteriesKDA: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 180,
    marginBottom: theme.spacing.e,
  },
  sumMasteriesIcons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 60,
  },
  icon: {
    width: "48%",
    margin: "1%",
    height: 30,
    borderRadius: 90,
  },
  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: "4%",
  },
  iconItems: {
    height: 27,
    width: 27,
    borderRadius: 90,
    margin: 1,
  },
  kda: {
    marginTop: 10,
    marginRight: 30,
  },
  kdaText: {
    margin: 2,
    fontFamily: "DM-Sans",
  },
  objects: {},
  infoGame: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    fontFamily: "Inter",
  },
});

