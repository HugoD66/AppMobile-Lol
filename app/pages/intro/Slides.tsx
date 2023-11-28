import React, {ReactNode} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../types/screenDim';

interface SlideProps {
  imageSource: any;
  title: string;
  description: string;
  button: ReactNode;
}

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
    backgroundColor: '#070707',
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
    marginHorizontal: 38,
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'DM Sans'
  },
  desc: {
    textAlign: 'center',
    color: '#B3B0B8',
    fontWeight: "100",
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 50,
    marginBottom: 22,
  },
  pictureButton: {
    width: 56,
    height: 56,
  }
})