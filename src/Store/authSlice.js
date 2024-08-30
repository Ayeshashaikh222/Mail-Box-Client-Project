import { createSlice } from "@reduxjs/toolkit";

 const idToken = localStorage.getItem("token");
 const userId = localStorage.getItem("email");

 const isLoggedIn = !!idToken;

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
         isLoggedIn: isLoggedIn,
         idToken: idToken,
         userId: userId,

    },
    reducers: {
        login (state, action) {
            state.idToken = action.payload.idToken;
            state.userId = action.payload.userId;
            state.isLoggedIn = true;
            localStorage.setItem("token", action.payload.idToken);
            localStorage.setItem("email", action.payload.userId);
        },
        logout (state) {
            state.isLoggedIn = false;
            state.idToken = null,
            state.userId = "",
            localStorage.removeItem("token");
            localStorage.removeItem("email");

        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;