import axios from 'axios';
import {Champion} from "../pages/champ/Champion";

// Définissez une interface pour le type attendu en argument.
interface ChampionQuery {
    ChampionNameWithoutSpace: string;
}

export const GetDataChampion = async ({ ChampionNameWithoutSpace }: ChampionQuery) => {
    console.log(ChampionNameWithoutSpace);
    const url = `https://ddragon.leagueoflegends.com/cdn/13.22.1/data/fr_FR/champion/${ChampionNameWithoutSpace}.json`;
    console.log(url);

    try {
        const response = await axios.get(url);

        // Ici, vous devez accéder aux données en utilisant la clé qui est le nom du champion.
        const championInfo = response.data.data[ChampionNameWithoutSpace];

        // @ts-ignore
        // @ts-ignore
        const Champion = {
            idChampion: championInfo.id,
            name: championInfo.name,
            lore: championInfo.lore,
            title:championInfo.title,
            // ... autres propriétés que vous souhaitez inclure
            full: championInfo.passive.image.full,
            Q:championInfo.spells[0].image.full,
            W:championInfo.spells[1].image.full,
            E:championInfo.spells[2].image.full,
            R:championInfo.spells[3].image.full,
            Skins: championInfo.skins,


        };


        //console.log(Champion.maxNum); // Cela affichera le nombre de skins
        return Champion;

    } catch (error) {
        console.error(error);
        throw error;
    }
}
