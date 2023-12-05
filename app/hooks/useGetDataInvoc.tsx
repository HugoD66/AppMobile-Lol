import {getSummonerByName} from "../logic/logicInvoc";
import {useQuery} from "react-query";

const fetchData = async (invocName: string) => {
  return getSummonerByName(invocName);
};

export const useGetDataInvoc = (invocName: string | undefined) => {
  return useQuery({
    queryKey: ['invocs'],
    queryFn: () => fetchData(invocName ?? ''),
    enabled: Boolean(invocName)
  })
}