import {StyleSheet, View, Text} from "react-native";

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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'start',
  display: 'flex',
  flexDirection: 'row',
    height: 70,

  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
  }
});