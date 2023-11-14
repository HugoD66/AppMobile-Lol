import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
<<<<<<< HEAD:app/components/carousel/CarouselChamp/CardChamp.tsx
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../../pages/accueil/Accueil";
import { CardChampProps } from "../../../types/CardChampProps"
=======
import {StackParamList} from "../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
>>>>>>> 913e399bedbb350a3f9042496f09048078ae7ea4:app/components/carousel/CardChamp.tsx

export type StackNavigationProps = NativeStackNavigationProp<StackParamList, 'Accueil'>

export type StackNavigationProps = NativeStackNavigationProp<StackParamList, 'Accueil'>

export function CardChamp({titleCard, subTitleCard, imageCard}: CardChampProps) {
  const navigation = useNavigation<StackNavigationProps>();

  console.log({titleCard})
  const navigate = () => {
<<<<<<< HEAD:app/components/carousel/CarouselChamp/CardChamp.tsx
=======
    console.log({navigation: navigation.getState()})
>>>>>>> 913e399bedbb350a3f9042496f09048078ae7ea4:app/components/carousel/CardChamp.tsx
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
  },
});