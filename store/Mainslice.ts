import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// create a slice 
export const treeslice = createSlice({
   name: "tree",
   initialState: {
      whichlevel: '1'
   },
   reducers: {
      updatelevel: (state, action) => {
         state.whichlevel = action.payload;
      },
   }
})
// config the store 
const store = configureStore({
   reducer: {
      tree: treeslice.reducer
   }
})

// export default the store 
export default store

// export the action
export const {
   updatelevel
} = treeslice.actions