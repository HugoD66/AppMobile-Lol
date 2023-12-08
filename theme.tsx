import { createTheme } from '@shopify/restyle';





const palette = {
  purplePrimary: '#8B00FF',
  purplePrimaryDark: '#6500BA',

  grayLight: '#B3B0B8',
  grayDark: '#7C7A80',
  black: '#000000',
  blackOne: '#101114',
  blackTwo: '#1E1F24',
  blackThree: '#2B2C33',
  blackFour: '#454652',
  backForm: '#1E1724',

  green: '#39CC59',
  red: '#E03F3F',
  white: '#F0F2F3',
  subtitleCard: 'rgba(255,255,255, 0.6)',

  gameWin: 'rgba(10,243,60,0.25)',
  gameLoose: 'rgba(245,13,13,0.43)',

};

const theme = createTheme({
  colors: {
    black: palette.black,
    white: palette.white,
    red: palette.red,
    green: palette.green,
    purplePrimary: palette.purplePrimary,
    purplePrimaryDark: palette.purplePrimaryDark,
    grayLight: palette.grayLight,
    grayDark: palette.grayDark,
    blackOne: palette.blackOne,
    blackTwo: palette.blackTwo,
    blackThree: palette.blackThree,
    blackFour: palette.blackFour,
    backgroundApp: palette.white,
    subtitleCard: palette.subtitleCard,
    backForm: palette.backForm,
    gameWin: palette.gameWin,
    gameLoose: palette.gameLoose,
  },
  spacing: {
    a: 4,
    b: 6,
    c: 8,
    d: 10,
    e: 12,
    f: 14,
    g: 16,
    h: 18,
    i: 20,
    j: 22,
    k: 24,
    l: 26,
    n: 30,
    mm: 50,
    o: 32,
    p: 34,
    q: 36,
    r: 38,
    s: 40,
    t: 42,
    u: 44,
    v: 46,
    w: 48,
    y: 52,
    z: 54,

    cent: 100,
    roundBorder: 90,
  },
  fontSize: {
    titleSum: 26,
    subTitleCard: 18,
    subTitleSum: 16,
    titleCardRecom: 30,
    titleChamp: 36,
    subtitleCardRecom : 14,
  },
  //Title Accueil
  textVariants: {
    title: {
      color: palette.white,
      fontSize: 25,
      letterSpacing: 1,
      marginLeft: 20,
    },
    subTitleVoirTous: {
      color: palette.white,
      fontSize: 17,
      letterSpacing: 1,
      marginRight: 20,
    }
  },
  //SLIDES
  titleSlide: {
    marginHorizontal: 38,
    marginBottom: 16,
    fontSize: 32,
  },
  descSlide: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 50,
    marginBottom: 22,
  }
});

export type Theme = typeof theme;
export default theme;