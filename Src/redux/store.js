//store  contain reducers.
import { configureStore } from "@reduxjs/toolkit"; 
import ItemReducer from './slices/FoodSlice';
import CartReducer from "./slices/CartSlice";
export const store=configureStore(
    {
        reducer:
        {
           foodItem:ItemReducer,
           cart:CartReducer,



        }
    }
);