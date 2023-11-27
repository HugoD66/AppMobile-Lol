import {View, StyleSheet, ScrollView, TouchableOpacity, Text, Image} from "react-native";
import {SearchChampProps} from "../../types/SearchChampProps";
import {SCREEN_WIDTH} from "../../types/screenDim";
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProps} from "../../../App";
import {SearchChampCard} from "../../components/search/SearchChampCard";

export function ResultSearchChamp({ championData }: SearchChampProps) {

  if(!championData) return null;


  return (
    <ScrollView>
        {championData &&  (
          <View style={styles.container}>
            <SearchChampCard championData={championData} />
            <SearchChampCard championData={championData} />
            <SearchChampCard championData={championData} />
            <SearchChampCard championData={championData} />
            <SearchChampCard championData={championData} />
            <SearchChampCard championData={championData} />
            <SearchChampCard championData={championData} />
          </View>
        )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});