'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
interface AuthState {
  token: string | null;
}
const initialState: AuthState = {
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      setCookie("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      deleteCookie("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
