import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import {Card} from "./Card";
export function CarouselChamp() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.cards}>
       <Card
         subTitleCard={'Ou Prodige Explorateur'}
         titleCard={'Ezreal'}
         imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')}
       />
       <Card
         subTitleCard={'L\'ombre de l\'agonie'}
         titleCard={'Evelynn'}
         imageCard={require('../../../assets/accueil/2-carousel-champ/2-Eve.png')}
       />
       <Card
         subTitleCard={'La Dame de lumière'}
         titleCard={'Lux'}
         imageCard={require('../../../assets/accueil/2-carousel-champ/3-Lux.png')}
       />
       <Card
         subTitleCard={'Vers l\'Ascension des Espinhos'}
         titleCard={'Zyra'}
         imageCard={require('../../../assets/accueil/2-carousel-champ/4-Zyra.png')}
       />
     </View>
      </ScrollView>

    </View>

  )
}
//styleInterpolator={} closing={} transitionSpec={} onClose={} onGestureEnd={} current={} onOpen={} gestureDirection={} headerDarkContent={} pageOverflowEnabled={} insets={} interpolationIndex={} onTransition={} overlayEnabled={} onGestureBegin={} gesture={} onGestureCanceled={} layout={}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  cards: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'scroll',
    paddingHorizontal: 10,
  },
});