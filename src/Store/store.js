// import { configureStore } from "@reduxjs/toolkit";
// import cartRedux from "../Store/CartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartRedux,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
