import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, activeReducer, cartReducer } from "../features"
export const store = configureStore({
  reducer: {
    products: productsReducer,
    activeCategory: activeReducer,
    cartState: cartReducer
  },
});
