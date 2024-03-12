import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        { id: 1, name: "Coffee", quantity:0, price:10 },
        { id: 2, name: "Tea", quantity:0, price:20 },
        { id: 3, name: "Maggie", quantity:0, price:50 },
        { id: 4, name: "Pizza", quantity:0, price:100 },
        { id: 5, name: "Water Bottle", quantity:0, price:20 }
    ]
  };
  
  const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      updateQuantity(state, action) {
        const { itemId, quantity } = action.payload;
        const item = state.items.find((i) => i.id === itemId);
        if (item) {
          item.quantity = quantity;
        }
      },
    },
  });
  
  export const { addItem, removeItem, updateQuantity } = slice.actions;
  export const billReducer = slice.reducer;