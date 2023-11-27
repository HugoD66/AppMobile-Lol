import {View, Text, StyleSheet} from "react-native";
import {SearchInvocProps} from "../../types/SearchInvocProps";
import {SCREEN_WIDTH, SCREEN_HEIGHT} from "../../types/screenDim";

export function Invocateur({ invocData }: SearchInvocProps) {
  //if(!invocData) return (<View><Text>Chargement...</Text></View>);
  console.log(invocData);
  console.log('coucou');
  console.log(invocData?.name);
  return (
    <View style={styles.container}>
      <Text style={styles.summName}>nom summoner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'black',
  },
  summName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});