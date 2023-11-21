import axios from 'axios';

interface ChampionQuery {
    ChampionNameWithoutSpace: string;
}

export const GetDataChampion = async ({ ChampionNameWithoutSpace }: ChampionQuery) => {
    console.log(ChampionNameWithoutSpace);
    const url = `https://ddragon.leagueoflegends.com/cdn/13.22.1/data/fr_FR/champion/${ChampionNameWithoutSpace}.json`;
    console.log(url);

    try {
        const response = await axios.get(url);
        const championInfo = response.data.data[ChampionNameWithoutSpace];

        const Champion = {
            idChampion: championInfo.id,
            nom: championInfo.name,
            lore: championInfo.lore,
            title:championInfo.title,
            full: championInfo.passive.image.full,
            Q:championInfo.spells[0].image.full,
            W:championInfo.spells[1].image.full,
            E:championInfo.spells[2].image.full,
            R:championInfo.spells[3].image.full,
            Skins: championInfo.skins,
            spells: championInfo.spells
        };
        return Champion;

    } catch (error) {
        console.error(error);
        throw error;
    }
}