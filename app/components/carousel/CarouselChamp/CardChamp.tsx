import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { CardChampProps } from "../../../types/CardChampProps"
import {StackParamList} from "../../../../App";
import {SCREEN_WIDTH} from "../../../types/screenDim";
import theme from "../../../../theme";


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
    marginBottom: 6,
    width: SCREEN_WIDTH * .27,
  },
  titleCard: {
    fontWeight: 'bold',
    fontFamily: 'DM-Sans',
    marginTop: 6,
    color: theme.colors.white,
    fontSize: theme.fontSize.subTitleCard,
  },
  subtitleCard: {
    fontWeight: '300',
    width: '90%',
    fontFamily: 'Inter',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 14,
    color: theme.colors.subtitleCard,
  },
});