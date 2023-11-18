import {View, StyleSheet, Text} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../types/screenDim";
import {CardChamp} from "../../components/carousel/CarouselChamp/CardChamp";
export function AfterSearch() {
  return (
    <View style={styles.container}>
      <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                 titleCard={'Ezreal'}
                 imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
      <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                 titleCard={'Ezreal'}
                 imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
      <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                 titleCard={'Ezreal'}
                 imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
      <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                 titleCard={'Ezreal'}
                 imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
      <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                 titleCard={'Ezreal'}
                 imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
      <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                 titleCard={'Ezreal'}
                 imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT * .6,
      top: SCREEN_HEIGHT * .25,
      backgroundColor: 'orange',
      zIndex: 15,
        /*
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         */
    },
}
);