import { createSlice } from "@reduxjs/toolkit";

import { fetchPosts,addPosts,deletePosts } from "../api/crudApis";




const initialState = {
  loading: false,
  post: [],
  errors: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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
      })
      .addCase(addPosts.pending,(state)=>{
        state.loading = true
        
      })
      .addCase(addPosts.fulfilled,(state,action)=>{
        state.loading = false,
         state.post.unshift(action.payload),
        state.errors = null

      })
      .addCase(addPosts.rejected,(state,action)=>{
        state.loading = false,
        state.errors = action.error.message
      })
      .addCase(deletePosts.pending,(state)=>{
        state.loading=true
      })
      .addCase(deletePosts.fulfilled,(state,action)=>{
        state.loading = false,
        state.post = state.post.filter((item)=>item.id!==action.payload.id),
        state.errors = null
      })
      .addCase(deletePosts.rejected,(state,action)=>{
        state.loading = false,
        state.errors =action.payload
      })
  },
});

export default postSlice.reducer;
