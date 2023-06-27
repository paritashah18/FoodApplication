import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Editprofileusrname = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left"
            size={50}
            color={'black'}></MaterialCommunityIcons>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            color: 'black',

            top: 10,

            textAlign: 'center',
            alignContent: 'center',
            fontFamily: 'VarelaRound-Regular',
            left: 80,
          }}>
          Edit username
        </Text>
      </View>

      <TouchableOpacity
        style={{
          borderRadius: 18,
          backgroundColor: '#ff8b3d',
          height: 60,
          width: 340,
          marginTop: 20,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Profilename')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            justifyContent: 'center',
            alignSelf: 'center',
            fontFamily: 'VarelaRound-Regular',
          }}>
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Editprofileusrname;
