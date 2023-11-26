import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { CardChampProps } from "../../../types/CardChampProps"
import {StackParamList} from "../../../../App";
import {SCREEN_WIDTH} from "../../../types/screenDim";


export type StackNavigationProps = NativeStackNavigationProp<StackParamList, 'Accueil'>

export function CardChamp({titleCard, subTitleCard, imageCard}: CardChampProps) {
  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Champion', {
      nom: titleCard,
    });
  };

  return (
    <TouchableOpacity style={styles.touchableContent} onPress={() => navigate()}>
      <Image style={styles.card} source={imageCard} />
      <Text style={styles.titleCard}>{titleCard}</Text>
      <Text style={styles.subtitleCard}>{subTitleCard}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  touchableContent : {
    width: SCREEN_WIDTH * .30,
  },
  card: {
    marginBottom: 5,
    width: SCREEN_WIDTH * .27,
  },
  titleCard: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 5,
  },
  subtitleCard: {
    color: 'white',
    fontSize: 13,
    fontWeight: '300',
    width: '90%',
    marginTop: 4,
    marginBottom: 15,
  },
});