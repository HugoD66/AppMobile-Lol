import {View, StyleSheet, ScrollView, TouchableOpacity, Text, Image} from "react-native";
import {SearchChampProps} from "../../types/SearchChampProps";
import {SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../components/carousel/CarouselChamp/CardChamp";

export function ResultSearchChamp({ championData }: SearchChampProps) {
  if(!championData || championData.length === 0) return null;

  const navigation = useNavigation<StackNavigationProps>();

  return (
      <ScrollView>
        <View style={styles.container}>
          {championData.map((champion, index) => (
              <TouchableOpacity
                  key={index}
                  style={styles.touchableContent}
                  onPress={() => navigation.navigate('Champion', { nom: champion.id })}
              >

                <Image
                    style={styles.pictureCard}
                    source={{ uri: `${champion.full}` }}
                />
                <View style={styles.contentTexts}>
                  <Text style={styles.titleCard}>{champion.name}</Text>
                  <Text style={styles.subtitleCard}>{champion.title}</Text>
                </View>
              </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  );
}

// Styles...


//            <Text style={styles.titleCard}>{invocData?.idInvoc}</Text>
//               <Image style={styles.pictureInvocCard} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${invocData?.profileIconId}.png` }} />
//
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.6,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  touchableContent : {
    width: SCREEN_WIDTH * .6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pictureCard: {
    marginBottom: 5,
    width: 90,
    height: 90
  },
  pictureInvocCard: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .80,
    height: 200,
    borderRadius: 90,
  },
  titleCard: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    padding: 5,
  },
  subtitleCard: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 15,
    padding: 5,
  },
  contentTexts : {

    left :10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});