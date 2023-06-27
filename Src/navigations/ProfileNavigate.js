import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Editprofileusrname from '../Screens/MainScreens/Profile/Editprofileusrname';
import ProfileScreen from '../Screens/MainScreens/Profile/Profile';
const Stack = createNativeStackNavigator();


const AuthStack4 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen name="Editprofileusrname " component={Editprofileusrname } />
     
    </Stack.Navigator>  
      
  );
};

export default AuthStack4;
