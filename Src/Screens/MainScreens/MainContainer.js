import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Home';
import DetailsScreen from './Cart';
import FavouritesScreen from './Favourites';
import ProfileScreen from './Profile';


//Screen names
const homeName = "Home";
const CartName = "Cart";
const FavouritesName = "Favourites";
const ProfileName = "Profile";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === CartName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === FavouritesName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        else if(rn === ProfileName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
            >

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={CartName} component={DetailsScreen} />
            <Tab.Screen name={FavouritesName} component={FavouritesScreen} />
            <Tab.Screen name={ProfileName} component={ProfileScreen} />

        </Tab.Navigator>
    </NavigationContainer >
  );
}

export default MainContainer;