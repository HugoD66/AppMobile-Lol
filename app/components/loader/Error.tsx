import {Text, StyleSheet, View} from 'react-native';
export function Error() {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}> Erreur pendant le chargement</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});