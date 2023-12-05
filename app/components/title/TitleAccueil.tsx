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
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH ,
  },
  title: {
    ...theme.textVariants.title,
    marginBottom: '7%',
    fontFamily: 'DM-Sans',
  },
  subtitle: {
     ...theme.textVariants.subTitleVoirTous,
    fontWeight: '100',
    marginBottom: '20%',
  },
});