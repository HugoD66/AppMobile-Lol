import { StyleSheet, ScrollView } from "react-native";
import { SumNav } from "../../components/accueil/SumNav";
import { TitleAccueil } from "../../components/title/TitleAccueil";
import { CarouselChamp } from "../../components/carousel/CarouselChamp/CarouselChamp";
import { CarouselRecommend } from "../../components/carousel/CarouselRecommend/CarouselRecommend";
import { CarouselRuneterra } from "../../components/carousel/CarouselRunterra/CarouselRuneterra";
import { ContentPlayerList } from "../../components/accueil/PlayerList/ContentPlayerList";
import {UserProps} from "../../types/UserProps";
import {useRoute} from "@react-navigation/native";
import {useState} from "react";

export function Accueil({ route }: { route: { params: { invocateur: string } } }) {
  const { invocateur } = route.params;

  /*
  const initialInvocateur = route.params || ""; // Utilisez une valeur par défaut
  const [invocateur, setInvocateur] = useState(initialInvocateur);
   */

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SumNav  invocateur={invocateur}/>
      <TitleAccueil
        title="Mes champions"
        subtitle="Voir tous"/>
      <CarouselChamp />
      <TitleAccueil
        title="Recommandés pour vous"
        subtitle=""
        titleStyle={styles.title}
      />
      <CarouselRecommend />
      <TitleAccueil
        title="Runeterra"
        subtitle=""/>
      <CarouselRuneterra />
      <TitleAccueil
        title="Builds de pro-players"
        subtitle="Voir tous"/>
      <ContentPlayerList />
    </ScrollView>
    );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#070707',
  },
  title : {
    marginBottom: '0%',
  },
});