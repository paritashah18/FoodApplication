
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native';
import styles from './Style/OtpStyle'
import {useNavigation} from '@react-navigation/native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OtpScreen = () => {


  const navigation = useNavigation();

  return (

    <View style={styles.main} >
      <TouchableOpacity style={styles.logo}>
     <MaterialCommunityIcons name='chevron-left'size={50}color={'black'}></MaterialCommunityIcons>
    </TouchableOpacity>
      <Image style={styles.image}

        source={require('../../Images/OTP.png')}/>

      <Text style={styles.logintext}>Login</Text>
      <Text style={styles.logindescription}>Enter the 4 digit phone number sent to your phone number</Text>

      <Text style={styles.phonenotext}>Enter OTP</Text>
      <View style={styles.otpbox}>
        <TextInput style={styles.otpno}maxLength={1}></TextInput>
        <TextInput style={styles.otpno}maxLength={1}></TextInput>
        <TextInput style={styles.otpno}maxLength={1}></TextInput>
        <TextInput style={styles.otpno}maxLength={1}></TextInput>


      </View>

      <TouchableOpacity style={styles.continuebutton}onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.continuebuttontext} >Login</Text>
      </TouchableOpacity>





    </View>


  );
}



export default OtpScreen;
