import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFooditemToMyCart,
  removeFooditemToMyCart,
  deleteMyCartItem,
} from '../../../redux/slices/CartSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Header from '../../../common/Header';
import {useNavigation} from '@react-navigation/native';
import {decreseqty, increseqty} from '../../../redux/slices/FoodSlice';
import HomeScreen from '../Home/FoodItem';

const CartItems = () => {
  const Navigation = useNavigation();

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
    <View style={{top: 10}}>
      <Header title={'Cart'} />

      <FlatList
        style={styles.flatliststyle}
        showsVerticalScrollIndicator={false}
        data={CartItem}
        renderItem={({item, index}) => {
          return (
            <View style={styles.maincontainer}>
              <View style={styles.container}>
                <Image source={item.img} style={styles.adminlogo} />

                <View style={styles.foodmenuitems}>
                  <Text style={styles.name}>{item.dish}</Text>
                  <Text style={styles.price}>{item.price}</Text>

                  <View style={{flexDirection: 'row'}}>
                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={{marginTop: 10}}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(decreseqty(item.id));
                            dispatch(removeFooditemToMyCart(item));
                          } else {
                            dispatch(deleteMyCartItem({id: item.id}));
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
                        style={{marginLeft: 8, marginRight: 8, marginTop: 10}}>
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
        }}
      />

      <View style={styles.totalamounttextview}>
        <Text style={styles.totalamounttext}>Total Amount</Text>
        <Text style={styles.finalprice}>{getTotal()}</Text>
      </View>
    </View>
  );
};

export default CartItems;
