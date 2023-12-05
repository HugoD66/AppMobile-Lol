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
    marginBottom: theme.spacing.b,
    width: SCREEN_WIDTH * .27,
  },
  titleCard: {
    fontWeight: 'bold',
    fontFamily: 'DM-Sans',
    color: theme.colors.white,
    fontSize: theme.fontSize.subTitleCard,
    marginTop: theme.spacing.b,
  },
  subtitleCard: {
    fontWeight: '300',
    width: '90%',
    fontFamily: 'Inter',
    fontSize: 13,
    color: theme.colors.subtitleCard,
    marginTop: theme.spacing.b,
    marginBottom: theme.spacing.f,
  },
});