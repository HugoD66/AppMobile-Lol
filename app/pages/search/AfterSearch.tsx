import {View, StyleSheet, ScrollView, Image, Text, TouchableOpacity} from "react-native";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { SearchChampProps } from "../../types/SearchChampProps";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../components/carousel/CarouselChamp/CardChamp";
import {InvocDataInterface} from "../../types/InvocDataInterface";

export function AfterSearch({ championData, invocData, activeOption }: SearchChampProps & { invocData: InvocDataInterface | null, activeOption: string }) {
  const navigation = useNavigation<StackNavigationProps>();
  if(!championData) return null;
  const navigateChamp = () => {
    navigation.navigate('Champion', {
      nom: championData.name,
    });
  };
  const navigateInvoc = () => {
    navigation.navigate('Accueil');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {championData && activeOption === 'Champions' && (
          <TouchableOpacity style={styles.touchableContent} onPress={() => navigateChamp()}>
            <View style={styles.contentTexts}>
              <Text style={styles.titleCard}>{championData.name}</Text>
              <Text style={styles.subtitleCard}>{championData.title}</Text>
            </View>
            <Image style={styles.pictureCard} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.name}_0.jpg` }} />
          </TouchableOpacity>
        )}
        {invocData && activeOption === 'Players' && (
          <TouchableOpacity style={styles.touchableContent} onPress={() => navigateInvoc()}>
            <View style={styles.contentTexts}>
              <Text style={styles.titleCard}>{invocData?.name}</Text>
              </View>
          </TouchableOpacity>

        )}
      </View>
    </ScrollView>
  );
}
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