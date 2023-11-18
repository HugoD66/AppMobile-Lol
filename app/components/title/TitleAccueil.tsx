import {StyleSheet, View, Text} from "react-native";
import {SCREEN_WIDTH} from "../../types/screenDim";

// @ts-ignore
export function TitleAccueil({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH ,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'row',

  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: '3%',
    marginBottom: '7%',
  },
  subtitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '200',
    margin: '3%',

  }
});