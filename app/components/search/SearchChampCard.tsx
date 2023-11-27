import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {SearchChampProps} from "../../types/SearchChampProps";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {SCREEN_WIDTH} from "../../types/screenDim";

export function SearchChampCard({ championData }: SearchChampProps) {

  if(!championData) return null;
  const navigation = useNavigation<RootStackNavigationProps>();
  const navigateChamp = () => {
    navigation.navigate('Champion', {
      nom: championData.name,
    });
  };

  return (
    <View>
      {championData &&  (
        <TouchableOpacity style={styles.touchableContent} onPress={() => navigateChamp()}>
          <Image style={styles.pictureCard} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.name}_0.jpg` }} />
          <Text style={styles.titleCard}>{championData.name}</Text>
          <Text style={styles.subtitleCard}>{championData.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  touchableContent : {
    width: SCREEN_WIDTH * .45,
    margin: 5,
  },
  pictureCard: {
    borderRadius: 10,
    width: SCREEN_WIDTH * .45,
    resizeMode: 'cover',
    height: 180,
    border: 45,
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
    marginBottom: 15,
    padding: 5,
  },
});