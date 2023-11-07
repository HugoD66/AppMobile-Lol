import { StyleSheet, Text, View} from 'react-native';
import FirstSlide from './app/pages/intro/FirstSlide';
import ThirdSlide from "./app/pages/intro/ThirdSlide";

export default function App() {
  return (
    <View style={styles.container}>
        <ThirdSlide/>
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
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
  }
});
