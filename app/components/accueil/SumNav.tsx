import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../carousel/CarouselChamp/CardChamp";


//export type StackNavigationProps = NativeStackNavigationProp<StackParamList, 'Accueil'>

export function SumNav() {
  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Search');
  };
  return (
    <View style={styles.sumNav}>
      <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
      <View style={styles.sumNavTitleDesc}>
        <Text style={styles.title}>Summoner</Text>
        <Text style={styles.subtitle}>Super lolaifiaieorae</Text>
      </View>
      <TouchableOpacity onPress={() => navigate()}>
        <Image  style={styles.loopSearch} source={require('../../../assets/general/loopSumNav.png')} />
      </TouchableOpacity>
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