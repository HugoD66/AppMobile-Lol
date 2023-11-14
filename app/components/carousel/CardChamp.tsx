import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";



export function CardChamp({titleCard, subTitleCard, imageCard}) {
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