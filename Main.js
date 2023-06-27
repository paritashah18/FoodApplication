import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItems} from './Src/redux/slices/FoodSlice';
import AuthStack from './Src/navigations/AuthNavigation';
import MainContainer from './Src/navigations/BottomTabNavigation';
let DATA = [
  {
    id: 1,
    img: require('./Src/Images/burger.png'),
    dish: 'Tandoori burger',
    price: '400',
    qty: 0,
  },
  {
    id: 2,
    img: require('./Src/Images/pizza.png'),
    dish: 'Cheese pizza',
    price: '600',
    qty: 0,
  },
  {
    id: 3,
    img: require('./Src/Images/panjabithali.png'),
    dish: 'Panjabi thali',
    price: '250',
    qty: 0,
  },
  {
    id: 4,
    img: require('./Src/Images/manchurian.png'),
    dish: 'Dry manchurian',
    price: '300',
    qty: 0,
  },
 
];
//save data in redux here.
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    DATA.map(item => {
      dispatch(addItems(item));
    });
  }, []);

  return (
    <NavigationContainer>
    <AuthStack>
      <MainContainer></MainContainer>
    </AuthStack>
    </NavigationContainer>
  );
};

export default Main;
