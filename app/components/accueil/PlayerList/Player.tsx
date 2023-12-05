import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../../../App";
import theme from "../../../../theme";
import {SCREEN_WIDTH} from "../../../types/screenDim";
export function Player() {

    const navigation = useNavigation<RootStackNavigationProps>();
    const navigate = () => {
        console.log({navigation: navigation.getState()})
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
        width: theme.spacing.mm + 1,
        height: theme.spacing.mm + 1,
        backgroundColor: theme.colors.purplePrimaryDark,
        borderRadius: theme.spacing.b,
    },
    picturePlayer: {
        margin: theme.spacing.d,
        width: theme.spacing.mm,
        height: theme.spacing.mm,
        borderRadius: theme.spacing.c,
    },
    titlePictureDesc: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: theme.spacing.n,
    },
    playerName: {
        fontFamily: 'DM-Sans',
        color: theme.colors.white,
        fontSize: theme.spacing.j,
        marginBottom: theme.spacing.a,
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
        marginLeft: theme.spacing.c,
    },
    role: {
        height: theme.spacing.j,
        width: theme.spacing.j,
        marginLeft: theme.spacing.i,
    },
    champs: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pictureChamp: {
        height: theme.spacing.n,
        width: theme.spacing.n,
        margin: -5,
    },
    divider: {
        height: 1,
        position: 'absolute',
        width: SCREEN_WIDTH,
        bottom: -theme.spacing.d,
        left: theme.spacing.cent,
        backgroundColor: theme.colors.blackThree,
    }
});