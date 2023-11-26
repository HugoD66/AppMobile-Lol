import axios from 'axios';
import {APIKey} from "../../APIKey";

interface InvocQuery {
  InvocName: string;
}

export const GetDataInvoc = async ({ InvocName }: InvocQuery) => {
  console.log(InvocName);
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${InvocName}?api_key=${APIKey}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    const invocInfo = response.data.data[InvocName];

    const Invoc = {
      idInvoc: invocInfo.id,
      nom: invocInfo.name,
      //level: invocInfo.summonerLevel,
      //profileIconId: invocInfo.profileIconId,
    };
    return Invoc;

  } catch (error) {
    console.error(error);
    throw error;
  }
}