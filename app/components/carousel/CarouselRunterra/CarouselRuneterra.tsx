import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import {CardChamp} from "../CarouselChamp/CardChamp";
import {CardRunterra} from "./CardRunterra";
import theme from "../../../../theme";
export function CarouselRuneterra() {
  return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <View style={styles.cards}>
          <CardRunterra
            subTitleCard={''}
            titleCard={'Demacia'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/1-Demacia.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Noxus'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/2-Noxus.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Shurima'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/3-Shurima.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Shadow Isles'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/4-ShadowIsles.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Bilgewater'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/5-Bildewater.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Targon'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/6-Targon.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Ionia'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/7-Ionia.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Freljord'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/8-Freljord.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Zaun'}
            imageCard={require('../../../../assets/accueil/4-carousel-runeterra/9-Zaun.png')}
          />
        </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    marginBottom: 14,

  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'scroll',
    paddingHorizontal: 20,
  },
});