import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import HomeReducer from "./HomeSlice";

const Store = configureStore({
  reducer: {
    authentication: authReducer,
    home: HomeReducer,
  },
});

export default Store;
