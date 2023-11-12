import {StyleSheet, View} from "react-native";
import {CardRecommend} from "./CardRecommend";

export function CarouselRecommend() {
  return (
    <View style={styles.container}>
      <CardRecommend />
      <CardRecommend />
    </View>

  )
}
const styles = StyleSheet.create({
  container: {

    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 250,
  },
});