import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../../App";
import {TitleProps} from "../../types/TitleProps";

export function TitleAccueil({ title, subtitle, style, titleStyle, subtitleStyle, ...otherProps }: TitleProps) {
  const navigation = useNavigation<RootStackNavigationProps>();
  const navigate = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <TouchableOpacity onPress={navigate}>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH ,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
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
    fontWeight: '100',
    margin: '3%',
    marginBottom: '20%',
  },
});