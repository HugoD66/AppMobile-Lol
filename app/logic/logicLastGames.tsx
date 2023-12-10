import {APIKey} from "../../APIKey";
import axios from "axios/index";

export const getlastGamesKeys  = async (puuidUser: string | undefined) => {
  const url = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuidUser}/ids?start=0&count=15&api_key=${APIKey}`;
  try {
    const lastGamesId = await axios(url);
    return lastGamesId.data;
  } catch (error) {
    console.error(error);
  }
};
export const getAllGamesDetails = async (idMatch: string[]) => {
  try {
    const promises = idMatch.map(async (id: string) => {
      const url = `https://europe.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${APIKey}&includeTimeline=true`;
      const gamesResponse = await axios(url);
      const dataLastGames = gamesResponse.data;
      const detailMatchInfo = dataLastGames.info;
      const detailMatchMetaData = dataLastGames.metadata;
      return { detailMatchInfo, detailMatchMetaData };
    });
    const gamesResult = await Promise.all(promises);
    console.log(gamesResult)
    return gamesResult;
  } catch (error) {
  }
};