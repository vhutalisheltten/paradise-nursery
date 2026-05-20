import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const plant = action.payload
      const current = state.items[plant.id]
      if (current) {
        current.quantity += 1
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 }
      }
    },
    incrementQuantity(state, action) {
      const item = state.items[action.payload]
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity(state, action) {
      const item = state.items[action.payload]
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          delete state.items[action.payload]
        }
      }
    },
    removeItem(state, action) {
      delete state.items[action.payload]
    },
  },
})

export const { addItem, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions

export const selectCartItems = (state) => Object.values(state.cart.items)
export const selectCartQuantity = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0)
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.price * item.quantity, 0)

export default cartSlice.reducer
