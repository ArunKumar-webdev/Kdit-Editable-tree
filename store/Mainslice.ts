import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface datatype {
  innercotent: any;
  whichlevel: string;
  themecolor: any;
}

const initialState: datatype = {
  whichlevel: "1",
  innercotent: {},
  themecolor: "",
};

// create a slice
export const treeslice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    updatelevel: (state, action) => {
      state.whichlevel = action.payload;
    },
    updateinnercontent: (state, action) => {
      state.innercotent[state.whichlevel] = action.payload;
    },
    updatethemecolor: (state, action) => {
      state.themecolor = action.payload;
    },
  },
});
// config the store
const store = configureStore({
  reducer: {
    tree: treeslice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const { updatelevel, updateinnercontent, updatethemecolor } =
  treeslice.actions;
