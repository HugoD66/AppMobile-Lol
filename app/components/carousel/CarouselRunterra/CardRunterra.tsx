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
    marginRight: theme.spacing.e,
    backgroundColor: theme.colors.blackTwo,
  },
  titleCard: {
    fontFamily: 'DM-Sans',
    marginTop: theme.spacing.d,
    marginBottom: theme.spacing.d,
    color: theme.colors.white,
    fontSize: theme.fontSize.subTitleSum,
  },
});