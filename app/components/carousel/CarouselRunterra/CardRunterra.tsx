import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {CardRunterraProps} from "../../../types/CardRunterraProps";
import theme from "../../../../theme";

export function CardRunterra({titleCard, subTitleCard, imageCard}: CardRunterraProps) {
  return (
    <TouchableOpacity>
       <Image style={styles.card} source={imageCard} />
       <Text style={styles.titleCard}>{titleCard}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 110,
    marginRight: 12,
    backgroundColor: theme.colors.blackTwo,
  },
  titleCard: {
    fontFamily: 'DM-Sans',
    marginTop: 10,
    marginBottom: 10,
    color: theme.colors.white,
    fontSize: theme.fontSize.subTitleSum,
  },
});