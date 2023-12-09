import {APIKey} from "../../APIKey";
import axios from "axios/index";
import {InvocDataInterface} from "../types/InvocDataInterface";

const getItemsByGames = async (invocName: string | undefined) => {
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
    return summoner
  } catch (error) {
  }
};