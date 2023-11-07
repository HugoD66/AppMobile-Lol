import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import FirstSlide from './app/pages/intro/FirstSlide';

export default function App() {
  return (
    <View style={styles.container}>
        <FirstSlide  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
