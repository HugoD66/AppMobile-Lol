import {View, StyleSheet, Text, ScrollView} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../types/screenDim";
import {CardChamp} from "../../components/carousel/CarouselChamp/CardChamp";
export function AfterSearch() {
  return (
    <ScrollView>
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
        <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                   titleCard={'Ezreal'}
                   imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
        <CardChamp subTitleCard={'Ou Prodige Explorateur'}
                   titleCard={'Ezreal'}
                   imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        flexWrap: 'wrap',
        flexDirection: 'row',
        /*
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         */
    },
}
);