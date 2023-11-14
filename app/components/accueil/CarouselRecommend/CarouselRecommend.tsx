import {ScrollView, StyleSheet, View} from "react-native";
import {CardRecommend} from "./CardRecommend";

export function CarouselRecommend() {
  return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.cards}>
        <CardRecommend />
        <CardRecommend />
        <CardRecommend />
        <CardRecommend />

      </View>
      </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 300,

  },
  cards: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'scroll',
    paddingHorizontal: 0,
    height: 280,
  },
});