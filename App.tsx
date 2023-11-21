import {FirstSlide} from './app/pages/intro/FirstSlide';
import {SecondSlide} from "./app/pages/intro/SecondSlide";

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import ThirdSlide from "./app/pages/intro/ThirdSlide";
import FourthSlide from "./app/pages/intro/FourthSlide";
import {Accueil} from "./app/pages/accueil/Accueil";
import {Champion} from "./app/pages/champ/Champion";
import {Search} from "./app/pages/search/Search";
import {SkinScreen} from "./app/pages/champ/SkinScreen";
import {PlayerScreen} from "./app/pages/playerScreen/PlayerScreen";
import {Login} from "./app/pages/login/login";
import {FunctionComponent} from "react";

export type IntroParamList = {
    FirstSlide?: undefined;
    SecondSlide?: undefined;
    ThirdSlide?: undefined;
    FourthSlide?: undefined;
}

export type StackParamList = {
  Intro?: IntroParamList;
  Search?: undefined;
  Accueil?: undefined;
  PlayerScreen?: undefined;
  Login?: undefined;
  SkinScreen?: {
    nom: string,
  };
  Champion?: {
    nom: string,
  };
}

export type StackNavigationProps = NativeStackNavigationProp<StackParamList>

const IntroStackNavigator = createNativeStackNavigator<IntroParamList>();
const IntroStack = () => {
  return (
      <IntroStackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <IntroStackNavigator.Screen name={"FirstSlide"} component={FirstSlide} />
        <IntroStackNavigator.Screen name={"SecondSlide"} component={SecondSlide} />
        <IntroStackNavigator.Screen name={"ThirdSlide"} component={ThirdSlide} />
        <IntroStackNavigator.Screen name={"FourthSlide"} component={FourthSlide} />
      </IntroStackNavigator.Navigator>
  )
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Intro'} component={IntroStack} />
          <Stack.Screen name={'Accueil'} component={Accueil} />
          <Stack.Screen name={'Champion'} component={Champion} />
          <Stack.Screen name={'Search'} component={Search} />
          <Stack.Screen name={'SkinScreen'} component={SkinScreen} />
          <Stack.Screen name={'PlayerScreen'} component={PlayerScreen} />
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
