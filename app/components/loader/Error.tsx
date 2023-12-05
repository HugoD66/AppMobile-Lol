import {Text, StyleSheet, View} from 'react-native';
import theme from "../../../theme";
export function Error() {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}> Erreur pendant le chargement</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSize.subTitleCard,
  }
});