import {ActivityIndicator, StyleSheet, View} from 'react-native';
import theme from "../../../theme";
export function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"  color="white"/>
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
});