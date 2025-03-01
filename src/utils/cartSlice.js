import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
       items: []
    },
    reducers: {
       addItem: (state, action) => {
         //mutating the state
           //Redux Toolkit uses immer BTS
           state.items.push(action.payload);
       },
        removeItem: (state) => {
           state.items.pop();
        },
        //RTK - either mutate the existing state or return a new state
        clearCart: (state) => {
          // state.items.length = 0;
            // or return {items: []}
            return {items: []}; // this new [] will be replaced inside initialState =[]
        }
    }
});

export const {addItem, removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;