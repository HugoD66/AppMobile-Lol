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
import {Login} from "./app/pages/forms/Login";
import {Register} from "./app/pages/forms/Register";
import { QueryClient, QueryClientProvider } from 'react-query';
import {useEffect} from "react";
import {db} from "./db";
import {Invocateur} from "./app/pages/invocateur/Invocateur";

export type IntroParamList = {
    FirstSlide?: undefined;
    SecondSlide?: undefined;
    ThirdSlide?: undefined;
    FourthSlide?: undefined;
}

export type StackParamList = {
  Intro?: IntroParamList;
  Search?: undefined;
  Invocateur?: {
    invocName: string | undefined,
  }
  Accueil?: {
    invocateur: string | undefined,
  };
  PlayerScreen?: undefined;
  Login?: undefined;
  Register?: undefined;
  SkinScreen?: {
    nom: string,
  };
  Champion?: {
    nom: string,
  };
}


export type IntroStackNavigationProps = NativeStackNavigationProp<IntroParamList>
const IntroStackNavigator = createNativeStackNavigator<IntroParamList>();
const queryClient = new QueryClient();

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

export type RootStackNavigationProps = NativeStackNavigationProp<StackParamList>
const RootStack = createNativeStackNavigator<StackParamList>();

export default function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
              <RootStack.Screen name={'Intro'} component={IntroStack} />
              <RootStack.Screen name={'Accueil'} component={Accueil} initialParams={{ invocateur: '' }} />
              <RootStack.Screen name={'Invocateur'} component={Invocateur} initialParams={{ invocName: '' }} />
              <RootStack.Screen name={'Champion'} component={Champion} />
              <RootStack.Screen name={'Search'} component={Search} />
              <RootStack.Screen name={'SkinScreen'} component={SkinScreen} />
              <RootStack.Screen name={'PlayerScreen'} component={PlayerScreen} />
              <RootStack.Screen name={'Login'} component={Login} />
              <RootStack.Screen name={'Register'} component={Register} />
            </RootStack.Navigator>
          </NavigationContainer>
      </QueryClientProvider>
  );
}
