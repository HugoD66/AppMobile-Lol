import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export function Player() {
    return (
      <View style={styles.container}>
          <Image style={styles.picturePlayer} source={require('../../../../assets/accueil/5-player-list/players/1-player.png')} />
          <View style={styles.titlePictureDesc}>
            <Text style={styles.playerName}>Player</Text>
              <View style={styles.teamDesc}>
                  <Image style={styles.pictureTeam} source={require('../../../../assets/accueil/5-player-list/teams/1-team.png')} />
                  <Text style={styles.desc}>NomTeam</Text>
              </View>
          </View>
          <Image style={styles.role} source={require('../../../../assets/accueil/5-player-list/roles/1-role.png')} />
          <View style={styles.champs}>
              <Image source={require('../../../../assets/accueil/5-player-list/champs/11-champ.png')} />
              <Image source={require('../../../../assets/accueil/5-player-list/champs/12-champ.png')} />
              <Image source={require('../../../../assets/accueil/5-player-list/champs/13-champ.png')} />
          </View>
          <TouchableOpacity>
              <Image source={require('../../../../assets/buttons/buttom-list-champ.png')} />
          </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    picturePlayer: {

        borderRadius: 50,
        backgroundColor: 'red',
        margin: 10
    },
    titlePictureDesc: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    pictureTeam: {

    },
    playerName: {
        color: 'white'

    },
    teamDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    desc: {
        color: 'white'
    },
    role: {

    },
    champs: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});