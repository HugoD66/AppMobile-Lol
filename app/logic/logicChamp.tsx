import axios from 'axios';
import {useQuery} from "react-query";

interface ChampionQuery {
    ChampionNameWithoutSpace: string;
}
interface ChampionStats {
    hp: number;
    // ... autres propriétés de stats
}

interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    tags: string[];
    partype: string;
    stats: ChampionStats;
}

interface ChampionData {
    type: string;
    format: string;
    version: string;
    data: { [key: string]: Champion };
}
interface ChampionSummary {
    name: string;
    imageUrl: string;
    title : string;
}

export const GetDataChampion = async ({ ChampionNameWithoutSpace }: ChampionQuery) => {
    console.log(ChampionNameWithoutSpace);
    const url = `https://ddragon.leagueoflegends.com/cdn/13.22.1/data/fr_FR/champion/${ChampionNameWithoutSpace}.json`;

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
            spells: championInfo.spells,
            passive: championInfo.passive,
        };
        return Champion;

    } catch (error) {
        console.error(error);
        throw error;
    }
}
const fetchChampions = async (): Promise<ChampionData> => {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.23.1/data/fr_FR/champion.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Méthode pour rechercher des champions par nom
export const GetChampionByName = async (championName: string): Promise<{
    title: string;
    id : string;
    imageUrl: any;
    name: string }[]> => {
    try {
        const championData = await fetchChampions();
        const champions = Object.values(championData.data);
        return champions.filter(champion =>
            champion.name.toLowerCase().startsWith(championName.toLowerCase())
        ).map(champion => ({
            id : champion.id,
            name: champion.name,
            imageUrl: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion.image.full}`,
            title: champion.title,
        }));
    } catch (error) {
        console.error('Error fetching champions:', error);
        return [];
    }
};