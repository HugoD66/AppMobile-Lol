import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../../../App";
export function Player() {

    const navigation = useNavigation<RootStackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
        navigation.navigate('PlayerScreen');
    };

    return (
          <TouchableOpacity style={styles.container}
            onPress={() => { navigate() }}>
              <View style={styles.picturePlayerBorder}>
                <Image style={styles.picturePlayer} source={require('../../../../assets/accueil/5-player-list/players/1-player.png')} />
              </View>
              <View style={styles.titlePictureDesc}>
                <Text style={styles.playerName}>Player</Text>
                  <View style={styles.teamDesc}>
                      <Image style={styles.pictureTeam} source={require('../../../../assets/accueil/5-player-list/teams/1-team.png')} />
                      <Text style={styles.desc}>NomTeam</Text>
                  </View>
              </View>
              <Image style={styles.role} source={require('../../../../assets/accueil/5-player-list/roles/1-role.png')} />
              <View style={styles.champs}>
                  <Image style={styles.pictureChamp} source={require('../../../../assets/accueil/5-player-list/champs/11-champ.png')} />
                  <Image style={styles.pictureChamp} source={require('../../../../assets/accueil/5-player-list/champs/12-champ.png')} />
                  <Image style={styles.pictureChamp} source={require('../../../../assets/accueil/5-player-list/champs/13-champ.png')} />
              </View>
              <Image source={require('../../../../assets/buttons/buttom-list-champ.png')} />
              <View style={styles.divider} />
          </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '3%',
    },
    picturePlayerBorder: {
        backgroundColor: '#6500BA',
        width: 52,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
        borderRadius: 6,
    },
    picturePlayer: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    titlePictureDesc: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: 30,
    },
    pictureTeam: {
    },
    playerName: {
        color: 'white',
        fontSize: 22,
        marginBottom: 4,
    },
    teamDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    desc: {
        color: 'white',
        marginLeft: 8,
        fontWeight: '200',
    },
    role: {
        height: 22,
        width: 22,
        marginLeft: 20,
    },
    champs: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pictureChamp: {
        height: 30,
        width: 30,
        margin: -5,
    },
    divider: {
        width: '100%',
        position: 'absolute',
        bottom: -10,
        left: 100,
        height: 1,
        backgroundColor: 'rgb(43, 44, 51)',
    }
});