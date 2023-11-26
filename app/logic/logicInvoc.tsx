import axios from 'axios';

interface InvocQuery {
  invocName: string;
}

export const GetDataInvoc = async ({ invocName }: InvocQuery) => {
  console.log(invocName);
  const url = `https://ddragon.leagueoflegends.com/cdn/13.22.1/data/fr_FR/champion/${invocName}.json`;
  console.log(url);

  try {
    const response = await axios.get(url);
    const invocInfo = response.data.data[invocName];

    const Invoc = {
      idInvoc: invocInfo.id,
    };
    return Invoc;

  } catch (error) {
    console.error(error);
    throw error;
  }
}