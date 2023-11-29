import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {SearchInvocProps} from "../../types/SearchInvocProps";
import {SCREEN_WIDTH, SCREEN_HEIGHT} from "../../types/screenDim";
import theme from "../../../theme";

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
        <Text style={styles.textSelection}>Tous</Text>
        <Text style={styles.textSelection}>Solo/Duo</Text>
        <Text style={styles.textSelection}>Flex</Text>
      </View>
      <View style={styles.panelMatchHistory}>
        <ScrollView>

             <View style={styles.contentGame}>

               <Image style={styles.pictureChamp} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />

               <View style={styles.contentInformationsGame}>
                 <View style={styles.iconsMasteriesKDA}>
                   <View style={styles.sumMasteriesIcons}>
                     <Image style={styles.icon} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                     <Image style={styles.icon} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                     <Image style={styles.icon} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                     <Image style={styles.icon} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                   </View>
                   <View style={styles.kda}>
                     <Text>10/2/5</Text>
                     <Text>10.0 KDA</Text>
                   </View>
                 </View>
                 <View style={styles.items}>
                   <Image style={styles.iconItems} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                   <Image style={styles.iconItems} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                   <Image style={styles.iconItems} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                   <Image style={styles.iconItems} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                   <Image style={styles.iconItems} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                   <Image style={styles.iconItems} source={require('../../../assets/tempEzChamp/tempInvocScreen/Champ.png')} />
                 </View>
               </View>

                 <View style={styles.infoGame}>
                   <Text>Flex 5:5 Rank</Text>
                   <Text>Victoire</Text>
                   <Text>Il y a 16 jours</Text>
                   <Text>25 min</Text>
                 </View>

             </View>

          <View style={{height: 1000, backgroundColor: 'red'}}></View>
        </ScrollView>
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
    height: 200,
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
    //marginRight: '20%',
    marginBottom: 30,
  },
  name: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  region: {
    color: 'white',
    textAlign: 'center',
  },
  rankPosition: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankPicture: {
    width: 100,
    height: 100,
  },
  position: {
    color: 'white',
    fontSize: 16,
  },
  selectionSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'black',
  },
  textSelection: {
    color: 'white',
  },
  panelMatchHistory: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 250,
  },
  contentGame: {
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
    borderRadius: 16,
    backgroundColor: theme.colors.backgroundRun,
  },
  pictureChamp: {
    height: 100,
    width: 100,
  },
  contentInformationsGame: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconsMasteriesKDA: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sumMasteriesIcons: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 60,
  },

  icon: {
    width: '48%',
    margin: '1%',
    height: 30,
    borderRadius: 90,
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  iconItems: {
    height: 30,
    width: 30,
    borderRadius: 90,
  },
  kda: {

  },
  objects: {

  },
  infoGame: {

  },
});