import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    saveUser: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
