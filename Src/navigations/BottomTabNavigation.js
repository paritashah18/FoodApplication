import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../Screens/MainScreens/Home/FoodItem';
import AuthStack4 from './ProfileNavigate';
import CartItems from '../Screens/MainScreens/Cart/FoodCart';

//Screen names
const homeName = 'Home';
const CartName = 'Cart';
const ProfileName = 'Profile';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === CartName) {
            iconName = focused ? 'md-cart-sharp' : 'md-cart-outline';
          } else if (rn === ProfileName) {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={'white'} />;
        },
        tabBarStyle: {backgroundColor: '#ff8b3d', height: 50},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12, bottom: 3},
      })}>
      <Tab.Screen name={homeName} component={HomeScreen} />

      <Tab.Screen name={CartName} component={CartItems} />

      <Tab.Screen name={ProfileName} component={AuthStack4} />
    </Tab.Navigator>
  );
};

export default MainContainer;
