import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchProduct, fetchProducts } from './productsApi';

const initialState = {
  products: [],
  filteredProductsByCategory: [],
  filteredProductsBySearch: [],
  product: {},
  isLoading: false,
  isError: false
};

export const getProducts = createAsyncThunk("products/getProducts", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await fetchProducts()
    return response.data

  } catch (error) {
    return rejectWithValue(error.message)
  }

})
export const getProduct = createAsyncThunk("products/getProduct", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await fetchProduct(id)
    return response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    categoryFilter: (state, action) => {

      if (action.payload === "All") {
        return {
          ...state,
          filteredProductsByCategory: []
        };

      }
      return {
        ...state,
        filteredProductsByCategory: state.products.filter(product => product.category === action.payload)
      };

    },
    searchFilter: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        filteredProductsBySearch: state.filteredProductsByCategory?.filter(product => product.title.indexOf(action.payload) !== -1)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false
    })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload
        state.isError = false
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload
        state.isError = false
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
      })
  }
})
export const productsReducer = productsSlice.reducer
export const { categoryFilter, searchFilter } = productsSlice.actions