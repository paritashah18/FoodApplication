//store  contain reducers.
import {configureStore} from '@reduxjs/toolkit';
import ItemReducer from './slices/FoodSlice';
import CartReducer from './slices/CartSlice';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
let persistConfig = {
  key: 'root',
  storage,
};
let rootReducer = combineReducers({
  foodItem: ItemReducer,
  cart: CartReducer,
});
let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
