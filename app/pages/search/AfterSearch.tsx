import {Text, Image, View, StyleSheet, ScrollView} from "react-native";
import { SCREEN_WIDTH } from "../../types/screenDim";
import {CardChamp} from "../../components/carousel/CarouselChamp/CardChamp";
import {SearchChampProps} from "../../types/SearchChampProps";
export function AfterSearch({ championData }: SearchChampProps) {
  if (championData && championData.name) {
    console.log(' coucou'  + championData.name);
    console.log(' coucou'  + championData.title);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {championData && (
          <>
            <Text style={styles.name}>{championData.name}</Text>
            <Text style={styles.title}>{championData.title}</Text>
            <Image style={styles.image} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.name}_0.jpg` }} />
          </>
        )}
      </View>
    </ScrollView>
  );
}
/*
 <View style={styles.container}>
        {championData && championData.name && (
          <CardChamp
            subTitleCard={championData.title}
            titleCard={championData.name}
            imageCard={require('../../../assets/accueil/2-carousel-champ/1-Ez.png')}
          />
          )}
      </View>
 */
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    image : {
      width: 200,
      height: 100,
      zIndex: 80,
    },
  name  : {
      fontSize: 40,
      color: 'white',
  },
  title : {

  }
});