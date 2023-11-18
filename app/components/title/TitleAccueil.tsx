import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProps} from "../../../App";

// @ts-ignore
export function TitleAccueil({ title, subtitle }) {
  const navigation = useNavigation<StackNavigationProps>();
  const navigate = () => {
    console.log({navigation: navigation.getState()})
    navigation.navigate('Search');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => { navigate() }}>

      <Text style={styles.subtitle}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH ,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'row',

  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: '3%',
    marginBottom: '7%',
  },
  subtitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '200',
    margin: '3%',

  }
});