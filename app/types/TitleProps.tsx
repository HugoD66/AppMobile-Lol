import {StyleProp, ViewStyle} from "react-native";

export interface TitleProps {
  title: string,
  subtitle: string,
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  subtitleStyle?: StyleProp<ViewStyle>;
}