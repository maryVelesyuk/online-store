import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {},
    isAuth: false,
  },
  reducers: {
    logIn(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logOut(state) {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export default userSlice.reducer;
export const { logIn, logOut } = userSlice.actions;
