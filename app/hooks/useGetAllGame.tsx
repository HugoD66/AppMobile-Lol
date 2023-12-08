import {getHistoriqueBySummoner, getSummonerByName} from "../logic/logicInvoc";
import {useQuery} from "react-query";

const fetchData = async (puuid: string) => {
    return getHistoriqueBySummoner(puuid);
};

export const useGetAllGame = (puuid: string | undefined) => {
    return useQuery({
        queryKey: ['games'],
        queryFn: () => fetchData(puuid ?? ''),
        enabled: Boolean(puuid)
    })
}