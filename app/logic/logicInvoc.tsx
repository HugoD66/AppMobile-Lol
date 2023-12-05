import axios from 'axios';
import {APIKey} from "../../APIKey";

interface InvocQuery {
  InvocName: string;
}

export const getDataInvoc = async ({ InvocName }: InvocQuery) => {
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