import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import FirstSlide from './app/pages/intro/FirstSlide';
import SecondSlide from "./app/pages/intro/SecondSlide";
export default function App() {
  return (
    <View style={styles.container}>
        <SecondSlide />
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
