import React, {useEffect, useState} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../../theme";
import axios from "axios";
import {InvocDataInterface} from "../../types/InvocDataInterface";
import {LinearGradient} from "expo-linear-gradient";
import {spells} from "../../logic/logicSpells";

//@ts-ignore
export function GameUnit({ game, invocData , selectedGameMode }) {
  const participantsList = game.detailMatchInfo.participants;
  const [firstPerk, setFirstPerk] = useState(null);
  const [secondPerk, setSecondPerk] = useState(null);

  const participant = participantsList.find(
    (participant: { puuid: any; }) => participant.puuid === invocData.puuid
  );

  if (!participant) {
    return (
      <View style={styles.contentGame}>
        <View style={styles.infoGame}>
          <Text>Participant not found</Text>
        </View>
      </View>
    );
  }

  const full1 = spells[participant.summoner1Id].full
  const summoner2Id = participant.summoner2Id;
  const full2 = spells[summoner2Id] ? spells[summoner2Id].full : "Sort non trouvé";

  // CALCUL DIFFERENCE DE TEMPS
  const gameStartTimeStamp = game.detailMatchInfo.gameStartTimestamp;
  const currentTimeStamp = new Date().getTime();
  const timeDifferenceInDays = Math.floor((currentTimeStamp - gameStartTimeStamp) / (1000 * 60 * 60 * 24));

  const championIcone = `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${participant.championName}.png`;
  const item1 = `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/fr_FR/item.json`;

  useEffect(() => {
    async function fetchRune() {
      const stylesArray = participant.perks.styles;
      if (stylesArray.length > 0) {
        const firstStyle = stylesArray[0];
        const selectionsArray = firstStyle.selections;
        if (selectionsArray.length > 0) {
          const firstSelection = selectionsArray[0];
          const perk = firstSelection.perk;
          const secondeSelection = selectionsArray[1]
          const secondPerk = secondeSelection.perk;
          setFirstPerk(perk);
          setSecondPerk(secondPerk)
        }
      }
    }
    fetchRune();
  }, []);

  return (
    <View
      style={[
        styles.contentGame,
      ]}
    >
      <LinearGradient
        colors={participant.win ? [theme.colors.gameWin, theme.colors.gameWinGradient] : [theme.colors.gameLoose, theme.colors.gameLooseGradient]}
        style={styles.linearGradient}
      />
      <Image
        style={styles.pictureChamp}
        source={{ uri: championIcone }}
      />
      <View style={styles.contentInformationsGame}>
        <View style={styles.iconsMasteriesKDA}>
          <View style={styles.sumMasteriesIcons}>
            <Image
              style={styles.icon}
              source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/${full1}`}}
            />
            <Image
              style={styles.icon}
              source={{ uri: `https://opgg-static.akamaized.net/meta/images/lol/perk/${firstPerk}.png?image=q_auto,f_webp,w_64,h_64&v=1700641403304`}}
            />
            <Image
              style={styles.icon}
              source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/${full2}`}}
            />
            <Image
              style={styles.icon}
              source={{ uri: `https://opgg-static.akamaized.net/meta/images/lol/perkStyle/${participant.perks.styles[0].style}.png?image=q_auto,f_webp,w_64,h_64&v=1700641403304`}}
            />
          </View>
          <View style={styles.kda}>
            <Text style={styles.kdaText}>
              {participant.kills} /
              {participant.deaths}/
              {participant.assists}
            </Text>
            <Text style={styles.kdaText}>{parseFloat(participant.challenges.kda).toFixed(2)}
              <Text style={styles.kdaTextLight}>KDA</Text>
            </Text>
          </View>
        </View>
        <View style={styles.items}>
          <Image
            style={styles.iconItems}
            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${participant.item0}.png`}}
          />
          <Image
            style={styles.iconItems}
            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${participant.item1}.png`}}
          />
          <Image
            style={styles.iconItems}
            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${participant.item2}.png`}}
          />
          <Image
            style={styles.iconItems}
            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${participant.item3}.png`}}
          />
          <Image
            style={styles.iconItems}
            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${participant.item4}.png`}}
          />
          <Image
            style={styles.iconItems}
            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${participant.item5}.png`}}
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
    marginTop: 8,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
    borderRadius: 16,
    backgroundColor: theme.colors.gameLoose,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: 10
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
    marginBottom: 12,
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
  kdaTextLight: {
    color: theme.colors.blackFour,
    fontStyle: 'italic',
  },
  kdaText: {
    margin: 2,
    fontSize: 16,
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

