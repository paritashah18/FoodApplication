import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
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
      <Stack.Screen name='MainContainer' component={MainContainer}/>
    
    
    </Stack.Navigator>  
      
  );
};

export default AuthStack;
