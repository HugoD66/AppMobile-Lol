import axios from 'axios';
import { APIKey } from '../../APIKey';
import {ImageRequireSource} from "react-native";

interface InvocQuery {
  InvocName: string;
}
export const GetDataInvoc = async ({ InvocName }: InvocQuery) => {
  console.log(InvocName);
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${InvocName}?api_key=${APIKey}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    const Invoc = {
      idInvoc: response.data.id,
      nom: response.data.name,
      summonerLevel: response.data.summonerLevel,
      profileIconId: response.data.profileIconId,
    };
    return Invoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

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



export const getSummonerData = async (summonerNameWithoutSpace: string) => {
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerNameWithoutSpace}?api_key=${APIKey}`;
  console.log(url);
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
    console.log(urlDetail);
    const response2 = await axios.get(urlDetail);
    console.log({
      data: response2?.data
    })
    const summonerDetail = {
      rank: response2.data?.[1]?.rank,
      tier: response2.data?.[1]?.tier,
    };
    type Rank = 'iron' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' | 'grandmaster' | 'challenger';

    interface RankImages {
      iron: any;
      bronze: any;
      silver: any;
      gold: any;
      platinum: any;
      diamond: any;
      master: any;
      grandmaster: any;
      challenger: any;
    }
    const rankImages: RankImages = {
      iron : require('../../assets/rank/emblem-iron.png'),
      bronze: require('../../assets/rank/emblem-bronze.png'),
      silver: require('../../assets/rank/emblem-silver.png'),
      gold: require('../../assets/rank/emblem-gold.png'),
      platinum: require('../../assets/rank/emblem-platinum.png'),
      diamond: require('../../assets/rank/emblem-diamond.png'),
      master: require('../../assets/rank/emblem-master.png'),
      grandmaster: require('../../assets/rank/emblem-grandmaster.png'),
      challenger: require('../../assets/rank/emblem-challenger.png'),
    };
    const elo: Rank = response2.data?.[1]?.tier.toLowerCase() as Rank;

    console.log(elo)
    const embleme = rankImages[elo]

    return {summoner, summonerDetail, embleme};
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
console.log(url)
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
