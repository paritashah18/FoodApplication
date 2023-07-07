import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addFooditemToMyCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          dish: action.payload.dish,
          id: action.payload.id,
          img: action.payload.img,
          price: action.payload.price,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeFooditemToMyCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },

    deleteMyCartItem(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addFooditemToMyCart, removeFooditemToMyCart, deleteMyCartItem} =
  CartSlice.actions;
export default CartSlice.reducer;
