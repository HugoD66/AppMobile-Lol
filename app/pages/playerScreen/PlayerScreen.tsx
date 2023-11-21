import {ScrollView, StyleSheet, Text} from "react-native";
import { View } from "react-native";
export function PlayerScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>PlayerScreen</Text>
      </View>
    </ ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#070707',
  },
});