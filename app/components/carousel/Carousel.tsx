import {StyleSheet, View, Image, Text} from "react-native";
export function Carousel() {
  return (
    <View style={styles.container}>
     <View style={styles.cards}>
       <Image style={styles.card} source={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
       <Text style={styles.titleCard}>Ezreal</Text>
       <Text style={styles.subtitleCard}>AZEARa arARAea arara</Text>
       <Image style={styles.card} source={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
       <Text style={styles.titleCard}>Ezreal</Text>
       <Text style={styles.subtitleCard}>AZEARa arARAea arara</Text>
       <Image style={styles.card} source={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')} />
       <Text style={styles.titleCard}>Ezreal</Text>
       <Text style={styles.subtitleCard}>AZEARa arARAea arara</Text>
     </View>
    </View>

  )
}
//styleInterpolator={} closing={} transitionSpec={} onClose={} onGestureEnd={} current={} onOpen={} gestureDirection={} headerDarkContent={} pageOverflowEnabled={} insets={} interpolationIndex={} onTransition={} overlayEnabled={} onGestureBegin={} gesture={} onGestureCanceled={} layout={}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  cards: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleCard: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
  subtitleCard: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    width: '100%',
    textAlign: 'justify',

  },
});