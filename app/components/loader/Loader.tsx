import {ActivityIndicator, StyleSheet, View} from 'react-native';
export function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"  color="white"/>
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
});