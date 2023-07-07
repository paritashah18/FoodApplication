import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../Screens/SplashScreen/Onboarding';
import LoginScreen from '../Screens/LoginScreen/Login';
import MainContainer from '../navigations/BottomTabNavigation';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainContainer" component={MainContainer} />
    </Stack.Navigator>
  );
};

export default AuthStack;
