import { createTheme } from '@shopify/restyle';

const palette = {
  purpleButtonDivider: '#8B00FF',


  backCarouselRun : 'rgb(43, 44, 51)',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    white: palette.white,
    backgroundApp: palette.white,
    backgroundRun: palette.backCarouselRun,
    purpleButtonDivider: palette.purpleButtonDivider,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      color: palette.white,
      fontSize: 25,
      letterSpacing: 1,
    },
    subTitleVoirTous: {
      color: palette.white,
      fontSize: 17,
      letterSpacing: 1,
    }
  },
});

export type Theme = typeof theme;
export default theme;