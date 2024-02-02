import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./authSlice";

const Store = configureStore({
    reducer: {
       authentication: authReducer,

    }
});

export default Store;