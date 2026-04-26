// import { createSlice } from "@reduxjs/toolkit";

// const cartRedux = createSlice({
//     name: "cart",
//     initinitialState: [
//       {
//         priceRange: 20,
//         name: "Product 1",
//         id: 1,
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqzh11ge8XxP5m4yUQnb1XbJzM3iYUSrakg&s",
//         description: "This is the sample product description.",
//         quantity: 1,
//       },
//     ],
//     reducers: {
//       addToCart: (state, action) => {
//         state.push(action.payload);
//       },
//     },
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//   },
// });

// export const { addToCart } = cartRedux.actions;
// export default cartRedux.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
