import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProps } from "../carousel/CarouselChamp/CardChamp";
import { SCREEN_WIDTH } from "../../types/screenDim";
import {UserProps} from "../../types/UserProps";

export function SumNav({ invocateur }: UserProps) {
  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Search');
  };
  const navigateLogin = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Login');
  };
  const navigateRegister = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Register');
  }
  console.log(`invocateur: ${invocateur}`)

  return (
    <View style={styles.sumNav}>
      <TouchableOpacity onPress={navigateLogin}>
        <Image style={styles.imageIconeSumNav} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateRegister}>
        <View style={styles.sumNavTitleDesc}>
          <Text style={styles.title}>{invocateur ? invocateur : 'S\'enregistrer'}</Text>
          <Text style={styles.subtitle}>{invocateur ? 'Identifié' : 'Non identifié'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigate}>
        <Image  style={styles.loopSearch} source={require('../../../assets/general/loopSumNav.png')} />
      </TouchableOpacity>
      <Image style={styles.rank} source={require('../../../assets/accueil/1-nav/rankPicture.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  sumNav: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    zIndex: 2,
    height: 120,
    width: SCREEN_WIDTH,
  },
  imageIconeSumNav: {
    marginTop: 10,
    marginLeft: 10,
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  sumNavTitleDesc: {
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
  },
  loopSearch: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 35,
  },
  rank: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    marginRight: 10,
  }
})