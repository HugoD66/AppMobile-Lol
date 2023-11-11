import {StyleSheet, View, Image, Text} from "react-native";
import {SumNav} from "../../components/accueil/SumNav";
import {TitleAccueil} from "../../components/title/TitleAccueil";
import {Carousel} from "../../components/carousel/Carousel";

export function Accueil() {
  return (
        <View style={styles.container}>
          <SumNav />
          <TitleAccueil  title="Mes champions" subtitle="Voir tous"/>
          <Carousel />
          <TitleAccueil  title="Recommandés pour vous" subtitle=""/>
          <TitleAccueil  title="Runeterra" subtitle=""/>
          <TitleAccueil  title="Builds de pro-players" subtitle="Voir tous"/>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
  },
});