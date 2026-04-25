import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext(null);

const initialCartState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );

      // If item does not exist
      if (existingIndex === -1) {
        return [...state, { ...action.payload, quantity: 1 }];
      }

      // If item exists → increase quantity
      return state.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }

    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "INCREASE_QUANTITY": {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }

    case "DECREASE_QUANTITY": {
      return state.map((item) => {
        return item.id === action.payload
          ? // ? { ...item, quantity: item.quantity - 1 }

            {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item;
      });
      // .filter((item) => item.quantity > 0)
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
  // console.log(state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
