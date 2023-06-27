import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFooditemToMyCart,
  deleteMyCartItem,
  removeFooditemToMyCart,
} from '../../../redux/slices/CartSlice';
import {increseqty, decreseqty} from '../../../redux/slices/FoodSlice';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  //whatever saved in main.js se nikalne ke liye.
  const FoodList = useSelector(state => state.foodItem);

  const CartItem = useSelector(state => state.cart);
  console.log('Added cart items', CartItem);

  const getTotal = () => {
    let total = 0;
    CartItem.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Text style={styles.Maintext}>Hello,</Text>
      <Text style={styles.Maintext2}>What do you{'\n'}want to eat Today?</Text>

      <View style={styles.searchview}>
        <Feather name="search" size={24} color="black"></Feather>
        <TextInput
          style={styles.searchinputtext}
          placeholder="What are you craving?"
          placeholderTextColor={'grey'}
          value={input}
          onChangeText={txt => setInput(txt)}></TextInput>
      </View>

      <FlatList
        style={{marginBottom: 10, margin: 10, bottom: 10}}
        showsVerticalScrollIndicator={false}
        data={FoodList}
        renderItem={({item, index}) => {
          if (input === '') {
            return (
              <View style={styles.container}>
                <View
                  style={{
                    height: 120,
                    backgroundColor: '#ffff',
                    borderRadius: 20,
                    marginTop: 18,
                    flexDirection: 'row',

                    width: '94%',
                    paddingLeft: 10,
                    bottom: 18,

                    alignSelf: 'center',
                    elevation: 10,
                    padding: 10,
                  }}>
                  <Image source={item.img} style={styles.adminlogo} />

                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    <Text style={styles.name}>{item.dish}</Text>
                    <Text style={styles.price}>{item.price}</Text>

                    <View style={{flexDirection: 'row'}}>
                      {item.qty == 0 ? (
                        <TouchableOpacity
                          style={{
                            borderRadius: 10,
                            backgroundColor: '#ff8b3d',
                            height: 40,
                            width: 120,
                          }}
                          onPress={() => {
                            dispatch(addFooditemToMyCart(item));
                            dispatch(increseqty(item.id));
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              letterSpacing: 1,
                              color: 'black',
                              fontFamily: 'VarelaRound-Regular',
                              marginTop: 10,
                              justifyContent: 'center',
                              textAlign: 'center',
                              alignSelf: 'center',
                            }}>
                            ADD TO CART
                          </Text>
                        </TouchableOpacity>
                      ) : null}

                      {item.qty == 0 ? null : (
                        <TouchableOpacity
                          style={{marginTop: 10}}
                          onPress={() => {
                            if (item.qty > 1) {
                              dispatch(decreseqty(item.id));
                              dispatch(removeFooditemToMyCart(item));
                            } else {
                              dispatch(deleteMyCartItem(item.id));
                              dispatch(decreseqty(item.id));
                            }
                          }}>
                          <AntDesign
                            name="minuscircleo"
                            size={28}
                            color={'#ff8b3d'}></AntDesign>
                        </TouchableOpacity>
                      )}

                      {item.qty == 0 ? null : (
                        <Text
                          style={{
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 10,
                          }}>
                          {item.qty}
                        </Text>
                      )}

                      {item.qty == 0 ? null : (
                        <TouchableOpacity
                          style={{marginTop: 10}}
                          onPress={() => {
                            dispatch(addFooditemToMyCart(item));
                            dispatch(increseqty(item.id));
                          }}>
                          <AntDesign
                            name="pluscircleo"
                            size={28}
                            color={'#ff8b3d'}></AntDesign>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          }
          if (item.dish.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.container}>
                <View
                  style={{
                    height: 120,
                    backgroundColor: '#ffff',
                    borderRadius: 20,
                    marginTop: 18,
                    flexDirection: 'row',

                    width: '94%',
                    paddingLeft: 10,
                    bottom: 18,

                    alignSelf: 'center',
                    elevation: 10,
                    padding: 10,
                  }}>
                  <Image source={item.img} style={styles.adminlogo} />

                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    <Text style={styles.name}>{item.dish}</Text>
                    <Text style={styles.price}>{item.price}</Text>

                    <View style={{flexDirection: 'row'}}>
                      {item.qty == 0 ? (
                        <TouchableOpacity
                          style={{
                            borderRadius: 10,
                            backgroundColor: '#ff8b3d',
                            height: 40,
                            width: 120,
                          }}
                          onPress={() => {
                            dispatch(addFooditemToMyCart(item));
                            dispatch(increseqty(item.id));
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              letterSpacing: 1,
                              color: 'black',
                              fontFamily: 'VarelaRound-Regular',
                              marginTop: 10,
                              justifyContent: 'center',
                              textAlign: 'center',
                              alignSelf: 'center',
                            }}>
                            ADD TO CART
                          </Text>
                        </TouchableOpacity>
                      ) : null}

                      {item.qty == 0 ? null : (
                        <TouchableOpacity
                          style={{marginTop: 10}}
                          onPress={() => {
                            if (item.qty > 1) {
                              dispatch(decreseqty(item.id));
                              dispatch(removeFooditemToMyCart(item));
                            } else {
                              dispatch(deleteMyCartItem(item.id));
                              dispatch(decreseqty(item.id));
                            }
                          }}>
                          <AntDesign
                            name="minuscircleo"
                            size={28}
                            color={'#ff8b3d'}></AntDesign>
                        </TouchableOpacity>
                      )}

                      {item.qty == 0 ? null : (
                        <Text
                          style={{
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 10,
                          }}>
                          {item.qty}
                        </Text>
                      )}

                      {item.qty == 0 ? null : (
                        <TouchableOpacity
                          style={{marginTop: 10}}
                          onPress={() => {
                            dispatch(addFooditemToMyCart(item));
                            dispatch(increseqty(item.id));
                          }}>
                          <AntDesign
                            name="pluscircleo"
                            size={28}
                            color={'#ff8b3d'}></AntDesign>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          }
        }}
      />
      {CartItem.length > 0 ? (
        <View style={styles.totalamounttextview}>
          <Text style={styles.totalamounttext}>{
            
            CartItem.length}</Text>
          <Text style={styles.finalprice}>{'Total Amount :' + getTotal()}</Text>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#ff8b3d',
              height: 60,
              width: 140,
              marginLeft: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Cart')}>
            <Text
              style={{
                fontSize: 12,
                letterSpacing: 1,
                color: 'black',
                fontFamily: 'VarelaRound-Regular',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              VIEW CART
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchview: {
    marginTop: 15,
    marginBottom: 15,
    height: 50,
    paddingLeft: 10,
    width: '90%',
    marginHorizontal: 10,
    alignSelf: 'center',
    borderColor: 'grey',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  searchinputtext: {
    marginLeft: 8,
    fontSize: 16,
    width: '88%',
    fontFamily: 'VarelaRound-Regular',
  },
  Maintext: {
    fontSize: 26,
    color: 'black',
    fontFamily: 'VarelaRound-Regular',
    marginLeft: 25,
    top: 5,
  },
  Maintext2: {
    fontSize: 26,
    color: 'black',
    fontFamily: 'VarelaRound-Regular',
    marginLeft: 25,
    top: 5,
    marginBottom: 10,
  },
  adminlogo: {
    height: 60,
    width: 60,
    borderRadius: 40,
    alignSelf: 'center',
  },
  name: {
    fontSize: 15,
    letterSpacing: 1,
    color: 'black',
    fontFamily: 'VarelaRound-Regular',
  },

  price: {
    fontSize: 15,
    letterSpacing: 1,
    color: 'grey',
    fontFamily: 'VarelaRound-Regular',
  },
  totalamounttextview: {
    height: 80,
    backgroundColor: '#ffff',
    borderRadius: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  totalamounttext: {
    marginLeft: 20,

    fontFamily: 'VarelaRound-Regular',
    color: 'black',
    fontSize: 15,
  },
  button: {
    borderRadius: 18,
    backgroundColor: '#ff8b3d',
    height: 60,
    width: 340,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  finalprice: {
    fontFamily: 'VarelaRound-Regular',
    color: 'black',
    fontSize: 15,
  },
});

export default HomeScreen;
