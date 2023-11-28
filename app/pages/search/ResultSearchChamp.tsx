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
                <View style={styles.contentTexts}>
                  <Text style={styles.titleCard}>{champion.name}</Text>
                  <Text style={styles.subtitleCard}>{champion.title}</Text>
                </View>
                <Image
                    style={styles.pictureCard}
                    source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg` }}
                />
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
    width: SCREEN_WIDTH,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  touchableContent : {
    width: SCREEN_WIDTH * .9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pictureCard: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .80,
    height: 200
  },
  pictureInvocCard: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .80,
    height: 200,
    borderRadius: 90,
  },
  titleCard: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 5,
    padding: 5,
  },
  subtitleCard: {
    color: 'white',
    fontSize: 17,
    fontWeight: '300',
    marginTop: 4,
    marginBottom: 15,
    padding: 5,
  },
  contentTexts : {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});