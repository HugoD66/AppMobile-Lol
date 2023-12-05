import React, {ReactNode, useContext} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../types/screenDim';
import { SlideProps } from '../../types/SlideProps';
import theme from "../../../theme";

export function Slide({ imageSource, title, description, button }: SlideProps) {

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.pictureChamp} source={imageSource} />
        <LinearGradient style={styles.linear} colors={['rgba(52,43,43,0)', 'rgb(0,0,0)']} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        {button}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: theme.colors.black,
  },
  pictureChamp: {
    height: SCREEN_HEIGHT * .61,
    width: SCREEN_WIDTH,
  },
  linear: {
    position:'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  section: {
    alignItems: 'center',
  },
  title: {
    ...theme.titleSlide,
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: 'DM-Sans',
  },
  desc: {
    ...theme.descSlide,
    textAlign: 'center',
    fontFamily: 'Inter',
    color: theme.colors.subtitleCard,
  },
  pictureButton: {
    width: 56,
    height: 56,
  }
})