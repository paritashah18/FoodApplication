import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const CustomButton = ({title,onClick,bgcolor,onPress}) => {
    return (
        <TouchableOpacity style={styles.continuebutton} onPress={()=>onClick()}>
        <Text style={styles.continuebuttontext}>{title}</Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    continuebutton: {
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: '#ff8b3d',
        justifyContent: 'center',
        height: 60, 
        width: 360,
    
      },
      continuebuttontext:
      {
        color: 'white', fontSize: 20, justifyContent: 'center', alignSelf: 'center', fontFamily:'VarelaRound-Regular',
      }
    
});
export default CustomButton;
