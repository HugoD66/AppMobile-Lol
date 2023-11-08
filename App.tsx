import {FirstSlide} from './app/pages/intro/FirstSlide';
import {SecondSlide} from "./app/pages/intro/SecondSlide";

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import ThirdSlide from "./app/pages/intro/ThirdSlide";
import FourthSlide from "./app/pages/intro/FourthSlide";

type StackParamList = {
  FirstSlide?: undefined;
  SecondSlide?: undefined;
  ThirdSlide?: undefined;
  FourthSlide?: undefined;
}

export type StackNavigationProps = NativeStackNavigationProp<StackParamList>

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'FirstSlide'} component={FirstSlide} />
          <Stack.Screen name={'SecondSlide'} component={SecondSlide} />
          <Stack.Screen name={'ThirdSlide'} component={ThirdSlide} />
          <Stack.Screen name={'FourthSlide'} component={FourthSlide} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
