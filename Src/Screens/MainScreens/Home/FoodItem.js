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
import styles from './styles';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
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
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={FoodList}
        renderItem={({item, index}) => {
          if (input === '') {
            return (
              <View style={styles.maincontainer}>
                <View style={styles.container}>
                  <Image source={item.img} style={styles.adminlogo} />

                  <View style={styles.fooditemdata}>
                    <Text style={styles.name}>{item.dish}</Text>
                    <Text style={styles.price}>{item.price}</Text>

                    <View style={{flexDirection: 'row'}}>
                      {item.qty == 0 ? (
                        <TouchableOpacity
                          style={styles.addtocartbtn}
                          onPress={() => {
                            dispatch(addFooditemToMyCart(item));
                            dispatch(increseqty(item.id));
                          }}>
                          <Text style={styles.addtocarttext}>ADD TO CART</Text>
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
                        <Text style={styles.qty}>{item.qty}</Text>
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
                <View style={styles.fooditemmaincontainer}>
                  <Image source={item.img} style={styles.adminlogo} />

                  <View style={styles.fooditemcontainer}>
                    <Text style={styles.name}>{item.dish}</Text>
                    <Text style={styles.price}>{item.price}</Text>

                    <View style={{flexDirection: 'row'}}>
                      {item.qty == 0 ? (
                        <TouchableOpacity
                          style={styles.addtocartbtn}
                          onPress={() => {
                            dispatch(addFooditemToMyCart(item));
                            dispatch(increseqty(item.id));
                          }}>
                          <Text style={styles.addtocarttext}>ADD TO CART</Text>
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
                        <Text style={styles.qty}>{item.qty}</Text>
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
          <Text style={styles.totalamounttext}>{CartItem.length}</Text>
          <Text style={styles.finalprice}>{'Total Amount :' + getTotal()}</Text>
          <TouchableOpacity
            style={styles.viewcart}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.viewcarttext}>VIEW CART</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default HomeScreen;
