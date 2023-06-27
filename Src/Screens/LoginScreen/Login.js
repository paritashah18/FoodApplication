import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import styles from './Style/LoginStyle';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../common/CustomButton';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigation = useNavigation();
  const saveEmailPass = async () => {
    try {
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('PASSWORD', password);
      Navigation.navigate('MainContainer');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <Image style={styles.image} source={require('../../Images/Login.png')} />
      <Text style={styles.logintext}>Login</Text>
      <Text style={styles.logindescription}>
        Enter Email and password to verify your account
      </Text>
      <Text style={styles.phonenotext}>Enter Email id</Text>
      <TextInput
        placeholderTextColor={'grey'}
        style={styles.phonenotextinput}
        onChangeText={txt => setEmail(txt)}
        value={email}></TextInput>
      <Text style={styles.phonenotext}>Password</Text>
      <TextInput
        placeholderTextColor={'grey'}
        style={styles.phonenotextinput}
        onChangeText={txt => setPassword(txt)}
        value={password}></TextInput>

      <CustomButton title={'Authenticate'} onClick={() => saveEmailPass()} />
    </ScrollView>
  );
};
export default LoginScreen;
