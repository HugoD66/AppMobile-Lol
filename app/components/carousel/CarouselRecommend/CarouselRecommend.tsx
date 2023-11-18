import {ScrollView, StyleSheet, View} from "react-native";
import {CardRecommend} from "./CardRecommend";

export function CarouselRecommend() {
  return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <View style={styles.cards}>
          <CardRecommend
            titleCard={'Vi'}
            subTitleCard={'Au défenseur de Piltover'}
            pictureChamp={require('../../../../assets/accueil/3-carousel-recomm/recomm-Vi.png')}
            backPicture={require('../../../../assets/accueil/3-carousel-recomm/backOne-recomm.png')}
            />
          <CardRecommend
            titleCard={'Lee sin'}
            subTitleCard={'Le moine aveugle'}
            pictureChamp={require('../../../../assets/accueil/3-carousel-recomm/recomm-Lee.png')}
            backPicture={require('../../../../assets/accueil/3-carousel-recomm/backTwo-recomm.png')}
          />
          <CardRecommend
            titleCard={'Yasuo'}
            subTitleCard={'L\'Impardonnable"'}
            pictureChamp={require('../../../../assets/accueil/3-carousel-recomm/recomm-Yas.png')}
            backPicture={require('../../../../assets/accueil/3-carousel-recomm/backThree-recomm.png')}
          />
        </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    height: 300,
    margin: 'auto',
    marginLeft: '3%',
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    height: 280,
  },
});