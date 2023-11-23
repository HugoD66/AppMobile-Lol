import {StyleSheet, ScrollView} from "react-native";
import {SumNav} from "../../components/accueil/SumNav";
import {TitleAccueil} from "../../components/title/TitleAccueil";
import {CarouselChamp} from "../../components/carousel/CarouselChamp/CarouselChamp";
import {CarouselRecommend} from "../../components/carousel/CarouselRecommend/CarouselRecommend";
import {CarouselRuneterra} from "../../components/carousel/CarouselRunterra/CarouselRuneterra";
import {ContentPlayerList} from "../../components/accueil/PlayerList/ContentPlayerList";



export function Accueil() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SumNav />
      <TitleAccueil  title="Mes champions" subtitle="Voir tous"/>
      <CarouselChamp />
      <TitleAccueil  title="Recommandés pour vous" subtitle=""/>
      <CarouselRecommend />
      <TitleAccueil  title="Runeterra" subtitle=""/>
      <CarouselRuneterra />
      <TitleAccueil  title="Builds de pro-players" subtitle="Voir tous"/>
      <ContentPlayerList />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#070707',
  },
});