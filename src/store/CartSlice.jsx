import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      const item = action.payload;
      const { name, image, cost } = item; 
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.quantity; 
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); 
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload.name;
      state.items = state.items.filter((item) => item.name !== itemName); 
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; 
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; 
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
