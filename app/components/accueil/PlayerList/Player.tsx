import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../../../App";
import theme from "../../../../theme";
import {SCREEN_WIDTH} from "../../../types/screenDim";
export function Player() {

    const navigation = useNavigation<RootStackNavigationProps>();
    const navigate = () => {
        navigation.navigate('Accueil');
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
                      <Image source={require('../../../../assets/accueil/5-player-list/teams/1-team.png')} />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '3%',
    },
    picturePlayerBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
        width: 51,
        height: 51,
        borderRadius: 6,
        backgroundColor: theme.colors.purplePrimaryDark,
    },
    picturePlayer: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    titlePictureDesc: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: 30,
    },
    playerName: {
        fontFamily: 'DM-Sans',
        fontSize: 22,
        marginBottom: 4,
        color: theme.colors.white,
    },
    teamDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    desc: {
        fontWeight: '200',
        fontFamily: 'Inter',
        color: theme.colors.white,
        marginLeft: 8,
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
        height: 1,
        bottom: -10,
        position: 'absolute',
        width: SCREEN_WIDTH,
        left: 100,
        backgroundColor: theme.colors.blackThree,
    }
});