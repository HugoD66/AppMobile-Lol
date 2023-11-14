import {StyleSheet, ScrollView} from "react-native";
import {SumNav} from "../../components/accueil/SumNav";
import {TitleAccueil} from "../../components/title/TitleAccueil";
import {CarouselChamp} from "../../components/carousel/CarouselChamp";
import {CarouselRecommend} from "../../components/accueil/CarouselRecommend/CarouselRecommend";
import {CarouselRuneterra} from "../../components/carousel/CarouselRuneterra";
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
//<View style={{height: 800, backgroundColor: 'red', width: '100%'}}></View>

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#070707',
    //paddingVertical: 100
  },
});