import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {SCREEN_WIDTH, SCREEN_HEIGHT} from "../../types/screenDim";
import theme from "../../../theme";
import {RouteProp, useRoute} from "@react-navigation/native";
import {StackParamList} from "../../../App";
import {useGetDataInvoc} from "../../hooks/useGetDataInvoc";

type RouteProps = RouteProp<StackParamList, 'Invocateur'>

export function Invocateur() {
  const route = useRoute<RouteProps>();
  const invocName = route.params?.invocName;
  const {data} = useGetDataInvoc(invocName)
  //console.log(`https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${data?.summoner.icon}.jpg`)



  //console.log(data);
  //console.log('coucou');
  return (
    <View style={styles.container}>

      <View style={styles.sumNav}>
        <View style={styles.sumIconAndLevel}>
          <Image style={styles.sumIcon}  source={{ uri: `https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${data?.summoner.icon}.jpg` }}/>
          <Text style={styles.level}>{data?.summoner.lvl}</Text>
        </View>
        <View style={styles.nameRegion}>
          <Text style={styles.name}>{data?.summoner.name}</Text>
          <Text style={styles.region}>#EUW</Text>
        </View>
        <View style={styles.rankPosition}>
          <Image style={styles.rankPicture} source={data?.imageRank} />
          <Text style={styles.position}>{data?.summonerDetail.rank}</Text>
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
    padding:0,
    marginTop : 10,
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
    borderRadius: 360,
    marginRight: 10,
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
    width: 500,
    height: 500,
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