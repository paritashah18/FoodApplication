import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpScreen from './Src/Screens/LoginScreen/Otp';
import OnBoarding from './Src/Screens/SplashScreen/Onboarding';
import LoginScreen from './Src/Screens/LoginScreen/Login';
import LogiScreen from './Src/Screens/Register';
import MainContainer from './Src/Screens/MainScreens/MainContainer';
const Stack = createNativeStackNavigator();
const App= () => {
  
  return (
<NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
         
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
         
        />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Register" component={LogiScreen} />
      </Stack.Navigator>    
    </NavigationContainer>
          
  );
};

export default App;
