import {getDetailMatchHistorique, getHistoriqueBySummoner} from "../logic/logicInvoc";
import {useQuery} from "react-query";

const fetchData = async (id: string) => {
    return getDetailMatchHistorique(id);
};

export const useGetDetailGame = (id: string | undefined) => {
    return useQuery({
        queryKey: ['detailGame'],
        queryFn: () => fetchData(id ?? ''),
        enabled: Boolean(id)
    })
}