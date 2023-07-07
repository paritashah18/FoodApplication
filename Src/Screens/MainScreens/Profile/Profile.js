import * as React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const logout = async () => {
    await AsyncStorage.setItem('EMAIL', '');
    await AsyncStorage.setItem('PASSWORD', '');
    console.log('User Logged out');
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          alignSelf: 'center',
          top: 10,
          fontFamily: 'VarelaRound-Regular',
        }}>
        Profile
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 40,
        }}>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 15,
            color: 'black',
            marginBottom: 40,
            fontFamily: 'VarelaRound-Regular',
          }}>
          EmailID
        </Text>
        <TouchableOpacity style={{marginLeft: 200}}>
          <MaterialCommunityIcons
            name="account-edit-outline"
            size={30}
            color={'black'}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 15,
            color: 'black',
            marginBottom: 20,
            fontFamily: 'VarelaRound-Regular',
          }}>
          Log Out
        </Text>
        <TouchableOpacity style={{marginLeft: 200}}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={'black'}
            onPress={() => {
              logout();
            }}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
