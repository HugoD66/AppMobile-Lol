import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";
export function CardRunterra({titleCard, subTitleCard, imageCard}) {
  return (
    <TouchableOpacity onPress={() => console.log('pressed')}>
      <Image style={styles.card} source={imageCard} />
      <Text style={styles.titleCard}>{titleCard}</Text>
      <Text style={styles.subtitleCard}>{subTitleCard}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgb(43, 44, 51)',
  },
  titleCard: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
  subtitleCard: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    width: '70%',
    textAlign: 'justify',
  },
});