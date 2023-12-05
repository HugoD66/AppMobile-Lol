import axios from 'axios';
import { APIKey } from '../../APIKey';

interface Summoner {
  accountId: string;
  id: string;
  name: string;
  puuid: string;
  lvl: number;
  icon: number;
}
interface summonerDetail {
  tier : string
  rank: string
  image : string
}
const getRankImage = ({tier}: { tier?: string }) => {
  switch (tier?.toLowerCase()) {
    case 'CHALLENGER':
      return "require('../../assets/rank/emblem-challenger.png')";
    case 'GRANDMASTER':
      return "require('../../assets/rank/emblem-grandmaster.png')";
    case 'MASTER':
      return "require('../../assets/rank/emblem-master.png')";
    case 'DIAMOND':
      return "require('../../assets/rank/emblem-diamond.png')";
    case 'PLATINUM':
      return "require('../../assets/rank/emblem-platinum.png')";
    case 'GOLD':
      return "require('../../assets/rank/emblem-gold.png')";
    case 'SILVER':
      return "require('../../assets/rank/emblem-silver.png')";
    case 'BRONZE':
      return "require('../../assets/rank/emblem-bronze.png')";
    case 'IRON':
      return "require('../../assets/rank/emblem-iron.png')";
    default:
      return require('../../assets/rank/emblem-iron.png'); // Default image or any placeholder
  }
};


export const getSummonerData = async (summonerNameWithoutSpace: string) => {
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerNameWithoutSpace}?api_key=${APIKey}`;
  //console.log(url);
  try {
    const response = await axios.get(url);

    const summoner: Summoner = {
      accountId: response.data.accountId,
      id: response.data.id,
      name: response.data.name,
      puuid: response.data.puuid,
      lvl: response.data.summonerLevel,
      icon: response.data.profileIconId,
    };

    const urlDetail = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner.id}?api_key=${APIKey}`;
    //console.log(urlDetail);
    const response2 = await axios.get(urlDetail);
    const summonerDetail = {
      rank: response2.data[1].rank,
      tier: response2.data[1].tier,

    };
    console.log(response2.data[1].tier)
    const imageRank = getRankImage(response2.data[1].tier)
    console.log(imageRank)
    return {summoner, summonerDetail, imageRank};
  } catch (error) {
    console.error(error);
    throw error;
  }

};

export const getSummonerByName = async (InvocName: string) => {
  const summonerNameWithoutSpace = InvocName.replace(/ /g, '%20');
  const summonerData = await getSummonerData(summonerNameWithoutSpace);
  return summonerData;
};

interface Invoc {
  idInvoc: string;
  nom: string;
  summonerLevel: number;
  profileIconId: number;
}

export const getHistoriqueBySummoner = async (puuid: string) => {
  const url = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=15&api_key=${APIKey}`;

  try {
    const response = await axios(url);
    const summonerHistoryIDs = response.data;
    return summonerHistoryIDs;
  } catch (error) {
    console.error(error);
  }
};

export const getDetailMatchHistorique = async (idMatch: string) => {
  const url = `https://europe.api.riotgames.com/lol/match/v5/matches/${idMatch}?api_key=${APIKey}&includeTimeline=true`;

  try {
    const response = await axios(url);
    const data = response.data;
    const detailMatchInfo = data.info;
    const detailMatchMetaData = data.metadata;
    return { detailMatchInfo, detailMatchMetaData };
  } catch (error) {
    console.error(error);
  }
};
