//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');
const Header = ({title, lefticon, width, backgroundColor}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headertext: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'VarelaRound-Regular',
  },
});

export default Header;
