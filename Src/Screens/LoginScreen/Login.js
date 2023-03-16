
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView ,Image} from 'react-native';
import styles from './Style/LoginStyle'
import {useNavigation} from '@react-navigation/native';


const LoginScreen = () => {

  const navigation = useNavigation();
  const [Phone, setPhone] = useState('');
  const [PhoneValidError, setPhoneValidError] = useState('');

  const handleValidPhone = () => {
    const Phonereg = /^[0-9]{10}$/;
    if (Phone.length === 0) {
      setPhoneValidError('Phone must be enter');
    } else if (Phonereg.test(Phone) === false) {
      setPhoneValidError('enter valid Phone*');
    } else if (Phonereg.test(Phone) === true) {
      setPhoneValidError('');
    }
  };
    return (
       
            <View style={styles.main} >

           
            <Image style={styles.image}
            source={require('../../Images/Login.png')}
          />
           <Text style={styles.logintext}>Login</Text>
           <Text style={styles.logindescription}>Enter your mobile number to verify your account</Text>


            <Text style={styles.phonenotext}>Enter Mobile Number</Text>

           
          
             
            <TextInput keyboardType='numeric' style={styles.phonenotextinput} placeholder=' 9875421684' maxLength={10}  value={Phone}
         
          onChangeText={value => {
            setPhone(value);
          }}></TextInput>

            {PhoneValidError ? (
          <Text style={{color: 'red', fontSize: 16, alignSelf: 'flex-end' ,marginRight:40}}>
            {PhoneValidError}
          </Text>
        ) : null}
{/* <TouchableOpacity style={styles.continuebutton} onPress={value =>
handleValidPhone(value)}> */}
<TouchableOpacity style={styles.continuebutton} onPress={()=> navigation.navigate('Otp')} >
            <Text style={styles.continuebuttontext}>Authenticate</Text>
</TouchableOpacity>




           
            </View>


    );
}



export default LoginScreen;
