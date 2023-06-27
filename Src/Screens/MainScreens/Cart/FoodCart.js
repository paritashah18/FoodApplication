import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFooditemToMyCart,
  removeFooditemToMyCart,
  deleteMyCartItem,
} from '../../../redux/slices/CartSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import {decreseqty, increseqty} from '../../../redux/slices/FoodSlice';
const CartItems = ({navigation}) => {
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
        style={{marginTop: 10, marginBottom: 10}}
        showsVerticalScrollIndicator={false}
        data={CartItem}
        renderItem={({item, index}) => {
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
                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={{marginTop: 10}}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(decreseqty(item.id));
                            dispatch(removeFooditemToMyCart(item));
                          } else {
                            dispatch(deleteMyCartItem({ id: item.id }));
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
    backgroundColor: '#ffff',
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  totalamounttext: {
    marginLeft: 20,
    marginRight: 180,
    fontFamily: 'VarelaRound-Regular',
    color: 'black',
    fontSize: 15,
    marginTop: 10,
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
    marginTop: 10,
  },
});

export default CartItems;
