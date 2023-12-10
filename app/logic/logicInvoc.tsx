import axios from 'axios';
import {APIKey} from '../../APIKey';
import {CompleteInvocDataInterface, InvocDataInterface} from "../types/InvocDataInterface";

export const getSummonerData = async (invocName: string | undefined) => {
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${invocName}?api_key=${APIKey}`;
  try {
    const axiosResponse = await axios.get(url);
    const summoner: InvocDataInterface = {
      summonerLevel: axiosResponse.data.summonerLevel,
      profileIconId: axiosResponse.data.profileIconId,
      name: axiosResponse.data.name,
      puuid: axiosResponse.data.puuid,
      accountId: axiosResponse.data.accountId,
      id: axiosResponse.data.id,
    };
    console.log(summoner);
    return summoner
  } catch (error) {
  }
};
export const getCompleteSummonerData = async (invocId: string | undefined) => {
 try {
   const urlDetail = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${invocId}?api_key=${APIKey}`;
   const summonerDetails = await axios.get(urlDetail);
   const summonerDetail: CompleteInvocDataInterface = {
     rank: summonerDetails.data[1].rank,
     tier: summonerDetails.data[1].tier,
   };
   const imageRank = getRankImage({tier: summonerDetail.tier});
   console.log(summonerDetail, imageRank);
   return { summonerDetail, imageRank};
 }catch (error) {
 }
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
      return require('../../assets/rank/emblem-iron.png');
  }
};




