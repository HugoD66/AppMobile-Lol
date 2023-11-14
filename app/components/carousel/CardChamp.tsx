import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackParamList} from "../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

interface CardChampProps {
  titleCard: string,
  subTitleCard: string,
  imageCard: any,
}

export type StackNavigationProps = NativeStackNavigationProp<StackParamList, 'Accueil'>

export function CardChamp({titleCard, subTitleCard, imageCard}: CardChampProps) {
  const navigation = useNavigation<StackNavigationProps>();

  console.log({titleCard})
  const navigate = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Champion', {
      nom: titleCard,
    });
  };

  return (
    <TouchableOpacity onPress={() => navigate()}>
      <Image style={styles.card} source={imageCard} />
      <Text style={styles.titleCard}>{titleCard}</Text>
      <Text style={styles.subtitleCard}>{subTitleCard}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card: {
    /*
    paddingHorizontal: 10,
    paddingVertical: 10,
     */
  },
  titleCard: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',

  },
  subtitleCard: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
    width: '70%',
    //textAlign: 'start',

  },
});