import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { build } from "vite";
import axios from "axios";


const initialState = {
    loading :false,
    post:[],
    errors:null
}
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.errors = null;
            state.post = action.payload;
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
          });
      },
})

 const fetchPosts = createAsyncThunk('fetchPosts',async()=>{
  try{  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return res?.data;}
    catch(error){
        console.log(error,'---error');
    }
})
export const fetchActions = postSlice.actions;

export default postSlice.reducer;
