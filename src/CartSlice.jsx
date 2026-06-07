import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.id === plant.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((plant) => plant.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((plant) => plant.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((plant) => plant.id !== action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((plant) => plant.id !== action.payload);
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalCost = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
