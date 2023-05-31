import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../features/user/userSlice";
import blogReducer from '../features/blogs/blogSlice';
import productReducer from '../features/products/productSlice';
import contactReducer from '../features/contact/contactSlice';
export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    blog:blogReducer,
    contact:contactReducer,
  },
});
