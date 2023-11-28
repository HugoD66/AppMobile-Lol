import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SCREEN_WIDTH } from "../../types/screenDim";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../../App";
import {TitleProps} from "../../types/TitleProps";
import theme from "../../../theme";

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
    ...theme.textVariants.title,
    fontWeight: '700',
    margin: '3%',
    marginBottom: '7%',
  },
  subtitle: {
     ...theme.textVariants.subTitleVoirTous,
    fontWeight: '100',
    margin: '3%',
    marginBottom: '20%',
  },
});