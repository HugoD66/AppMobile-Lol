import {View, Text, StyleSheet, Image} from "react-native";
import {SearchInvocProps} from "../../types/SearchInvocProps";
import {SCREEN_WIDTH, SCREEN_HEIGHT} from "../../types/screenDim";

export function Invocateur({ invocData }: SearchInvocProps) {
  //if(!invocData) return (<View><Text>Chargement...</Text></View>);
  console.log(invocData);
  console.log('coucou');
  console.log(invocData?.name);
  return (
    <View style={styles.container}>

      <View style={styles.sumNav}>
        <View style={styles.sumIconAndLevel}>
          <Image style={styles.sumIcon} source={require('../../../assets/accueil/1-nav/icone-sum.png')} />
          <Text style={styles.level}>124</Text>
        </View>
        <View style={styles.nameRegion}>
          <Text style={styles.name}>Truffman</Text>
          <Text style={styles.region}>#EUW</Text>
        </View>
        <View style={styles.rankPosition}>
          <Image style={styles.rankPicture} source={require('../../../assets/accueil/1-nav/rankPicture.png')} />
          <Text style={styles.position}>Emerald 2</Text>
        </View>
      </View>


      <View style={styles.selectionSearch}>
        <Text>Tous</Text>
        <Text>Solo/Duo</Text>
        <Text>Flex</Text>
      </View>
      <View style={styles.panelMatchHistory}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'black',
  },
  sumNav: {
    width: SCREEN_WIDTH,
    height: 300,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  sumIconAndLevel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sumIcon: {
    width: 100,
    height: 100,
  },
  level: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    bottom: 10,
  },
  nameRegion: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: '20%',
    marginBottom: 30,
  },
  name: {
    color: 'white',
    fontSize: 26,

  },
  region: {
    color: 'white',

  },
  rankPosition: {

  },
  rankPicture: {

  },
  position: {

  },
  selectionSearch: {

  },
  panelMatchHistory: {

  },
});