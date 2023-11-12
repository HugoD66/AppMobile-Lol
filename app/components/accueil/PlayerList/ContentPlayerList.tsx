import {View, StyleSheet} from "react-native";
import {Player} from "./Player";
export function ContentPlayerList() {
    return (
        <View style={styles.container}>
            <Player />
            <Player />
            <Player />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
});