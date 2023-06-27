//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height,width}=Dimensions.get('window');
const  Header= ({title,lefticon,width,backgroundColor}) => {
    return (
        

        <View style={styles.container}>
        <TouchableOpacity>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}></MaterialCommunityIcons>
  
          </TouchableOpacity>
        
        <Text style={styles.headertext}>{title}</Text>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:60,
        width:width,
       marginTop: 10,
        
        flexDirection:'row',
      
        alignSelf:'center'
    },
    headertext:
    {
        
        fontSize: 22,
        color: 'black',
        top: 10,
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        fontFamily: 'VarelaRound-Regular'
    }
       
   
  
});


export default Header;
