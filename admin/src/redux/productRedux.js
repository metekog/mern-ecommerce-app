import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.products = action.payload;
      state.isFetching = false;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.products.splice(
        //state.products.findIndex((item) => item._id === action.payload.id),
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE

    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
      state.isFetching = false;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD NEW ITEM

    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload);
      state.isFetching = false;
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
