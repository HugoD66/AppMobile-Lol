import {StyleSheet, View, Image, Text} from "react-native";

export function SumNav() {
  return (
    <View style={styles.sumNav}>
      <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
      <View style={styles.sumNavTitleDesc}>
        <Text style={styles.title}>Summoner</Text>
        <Text style={styles.subtitle}>Super lolaifiaieorae</Text>
      </View>
      <Image style={styles.loopSearch} source={require('../../../assets/accueil/1-nav/loopSumNav.png')} />
      <Image style={styles.rank} source={require('../../../assets/accueil/1-nav/RankPicture.png')} />
    </View>

  )
}
const styles = StyleSheet.create({
  sumNav: {
    //position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    zIndex: 2,
    height: 120,
    width: '100%',
  },
  imageIconeSumNav: {
    marginTop: 10,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  sumNavTitleDesc: {
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',

  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
  loopSearch: {

  },
  rank: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  }
})