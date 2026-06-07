import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.id === plant.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.items.find((plant) => plant.id === id);

      if (!item) {
        return;
      }

      const nextQuantity = item.quantity + change;

      if (nextQuantity > 0) {
        item.quantity = nextQuantity;
      } else {
        state.items = state.items.filter((plant) => plant.id !== id);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((plant) => plant.id !== action.payload);
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalCost = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
