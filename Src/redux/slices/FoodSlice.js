import {createSlice} from '@reduxjs/toolkit';

const FoodSlice = createSlice({
  name: 'foodItem',
  initialState: [],
  reducers: {
    addItems(state, action) {
      state.push(action.payload);
    },
    increseqty(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    decreseqty(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
  },
});
export const {addItems, increseqty, decreseqty} = FoodSlice.actions;
export default FoodSlice.reducer;
