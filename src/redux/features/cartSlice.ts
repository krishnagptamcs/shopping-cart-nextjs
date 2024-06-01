import { CartItemsType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState: CartItemsType[] = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartItemsType[]>) => {
      return action.payload;
    },

    increaseQty :(state, action:PayloadAction<CartItemsType>) =>{
    
    }
  },
});

export const { updateCart } = cart.actions;

export default cart.reducer;
