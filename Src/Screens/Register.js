
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image ,KeyboardAvoidingView} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { Dropdown } from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LogiScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState([]);
  const [isActive, setisActive] = useState(false);

  const [value2, setValue2] = useState([]);
  const [isActive2, setisActive2] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [SelectedDate, SetselectedDate] = useState();

  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [SelectedDate2, SetselectedDate2] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  

  const handleConfirm = (date) => {
    const dt=new Date(date);
    const x=dt.toISOString().split('T');
    const x1=x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
    SetselectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };
  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  

  const handleConfirm2 = (date) => {
    const dt=new Date(date);
    const x=dt.toISOString().split('T');
    const x1=x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
    SetselectedDate2(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker2();
  };



  const data = [
    { label: 'Birthday', value: '1' },
    { label: 'Anniversary', value: '2' },
    { label: 'Other', value: '3' },

  ];



  return (
    <ScrollView style={styles.Container}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity>
          <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}></MaterialCommunityIcons>

        </TouchableOpacity>
        <Text style={styles.register}>Profile</Text>
      </View>

      <Image style={styles.image}
        source={require('../Images/Register.png')}
      />

      <Text style={{ fontSize: 16, marginLeft: 40, color: 'black', fontWeight: 'bold' }}>Full name</Text>
      <View style={{
        flexDirection: 'row', marginTop: 10, borderRadius: 20,
        borderWidth: 0.8,
        borderColor: 'grey', height: 60, width: 360,
        alignItems: 'center',
        alignSelf: 'center'





      }}>

        <View style={{ marginLeft: 15 }}><Octicons name="person" size={25} ></Octicons></View>
        <TextInput style={styles.nameoccassiontextinput} placeholder='Enter FullName' placeholderTextColor={'grey'} ></TextInput>



      </View>

      <Text style={{ marginTop: 20, fontSize: 16, marginLeft: 40, color: 'black', fontWeight: 'bold' }}>Special Occasion</Text>
      <View style={{
        flexDirection: 'row', marginTop: 10, borderRadius: 20,
        borderWidth: 0.8,
        borderColor: 'grey', height: 60, width: 170,
        alignItems: 'center',
      
        marginLeft: 25






      }}>
       <TouchableOpacity style={{marginLeft: 15}} onPress={showDatePicker}><Octicons name="calendar" size={25} > <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /></Octicons></TouchableOpacity>
        <TextInput style={styles.nameoccassiontextinput1} placeholder='Select Date' placeholderTextColor={'grey'} >{SelectedDate}</TextInput>

        <Dropdown style={{
          marginLeft:8,
         borderRadius: 20,
          borderWidth: 0.8,
          borderColor: 'grey', height: 60, width: 185, fontSize: 16,
          
        }}
          placeholder="Select Occasion"
          placeholderStyle={{
            fontSize: 16,
            color: 'grey',
            paddingLeft:15
          


          }}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          setSelected={setValue2}
          renderRightIcon={() => (
            <Feather
              color={'black'}
              size={30}
              name={isActive2 ? 'chevron-up' : 'chevron-down'}



            />
          )}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
          onFocus={() => setisActive2(true)}
          onBlur={() => setisActive2(false)}
        />


      </View>
      <Text style={{ marginTop: 20, fontSize: 16, marginLeft: 40, color: 'black', fontWeight: 'bold' }}>Want to add more Occasion?</Text>
     
      <View style={{
        flexDirection: 'row', marginTop: 10, borderRadius: 20,
        borderWidth: 0.8,
        borderColor: 'grey', height: 60, width: 170,
        alignItems: 'center',
      
        marginLeft: 25






      }}>
       <TouchableOpacity style={{marginLeft: 15}} onPress={showDatePicker2}><Octicons name="calendar" size={25} > <DateTimePickerModal
        isVisible={isDatePickerVisible2}
        mode="date"
        onConfirm={handleConfirm2}
        onCancel={hideDatePicker2}
      /></Octicons></TouchableOpacity>
        <TextInput style={styles.nameoccassiontextinput1} placeholder='Select Date' placeholderTextColor={'grey'} >{SelectedDate2}</TextInput>

        <Dropdown style={{
          marginLeft:8,
         borderRadius: 20,
          borderWidth: 0.8,
          borderColor: 'grey', height: 60, width: 185, fontSize: 16,
          
        }}
          placeholder="Select Occasion"
          placeholderStyle={{
            fontSize: 16,
            color: 'grey',
            paddingLeft:15
          


          }}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          setSelected={setValue}
          renderRightIcon={() => (
            <Feather
              color={'black'}
              size={30}
              name={isActive ? 'chevron-up' : 'chevron-down'}



            />
          )}
          labelField="label"
          valueField="value"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
        />


      </View>
        

      <TouchableOpacity style={styles.continuebutton}onPress={()=> navigation.navigate('MainContainer')}>

        <Text style={styles.continuebuttontext}>Save</Text>
      </TouchableOpacity>





    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'white'


  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
    marginLeft:15,
  },
  register:
  {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    top: 10,
    textAlign: 'center',
    alignContent: 'center',
    left: 120
  },

  image:
  {
    height: 200, width: 200, alignSelf: 'center', borderRadius: 120, borderWidth: 1, backgroundColor: 'white', marginTop: 40, marginBottom: 40
  },
  nameoccassiontextinput: {
    fontSize: 16,
    color: 'black',
    marginLeft: 15,
    width: 300

  },

  nameoccassiontextinput1: {
    fontSize: 16,
    color: 'black',
    marginHorizontal:5,
    width: 110,


  },


  continuebutton: {
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: 'grey',
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 60, width: 360,

  },
  occasionview:
  {
    flexDirection: 'row', marginTop: 10, borderRadius: 20,
    borderWidth: 0.8,
    borderColor: 'grey', height: 60,
    width: 350, alignItems: 'center',
  },

  continuebuttontext:
  {

    color: 'white', fontSize: 20, justifyContent: 'center', alignSelf: 'center'
  }



});

export default LogiScreen;
