import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import {CardChamp} from "./CardChamp";
import {CardRunterra} from "./CardRunterra";


interface CardRunterraProps {
  subTitleCard: string,
  titleCard: string,
  imageCard: any,
}

export function CarouselRuneterra() {
  return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <View style={styles.cards}>
          <CardRunterra
            subTitleCard={''}
            titleCard={'Demacia'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/1-Demacia.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Noxus'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/2-Noxus.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Shurima'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/3-Shurima.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Shadow Isles'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/4-ShadowIsles.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Bilgewater'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/5-Bildewater.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Targon'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/6-Targon.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Ionia'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/7-Ionia.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Freljord'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/8-Freljord.png')}
          />
          <CardRunterra
            subTitleCard={''}
            titleCard={'Zaun'}
            imageCard={require('../../../assets/accueil/4-carousel-runeterra/9-Zaun.png')}
          />
        </View>
      </ScrollView>
  )
}
//styleInterpolator={} closing={} transitionSpec={} onClose={} onGestureEnd={} current={} onOpen={} gestureDirection={} headerDarkContent={} pageOverflowEnabled={} insets={} interpolationIndex={} onTransition={} overlayEnabled={} onGestureBegin={} gesture={} onGestureCanceled={} layout={}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 10,
    /*
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
     */
  },
  cards: {
    //width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'scroll',
    paddingHorizontal: 5,
  },
});