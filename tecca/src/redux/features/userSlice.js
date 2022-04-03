import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    displayName: "",
    uid: "",
    ip: "",
  },
};

const userSlice = createSlice({
  name: "setUser",
  initialState,
  reducers: {
    setCurrentUser: function (state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
