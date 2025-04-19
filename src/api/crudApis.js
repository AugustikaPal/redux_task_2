import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      return res?.data;
    } catch (error) {
      console.log(error, "---error");
    }
  });
  
  export const addPosts = createAsyncThunk("addPosts", async ({title,body}) => {
    console.log('inside post api',title,body);
    try {
      const res = await axios.post( `https://jsonplaceholder.typicode.com/posts`,{
        title , body
      });
      console.log(res?.data);
      return res?.data;
    } catch (error) {
      console.log(`Error in adding user`, error.message);
    }
  });
  
  export const deletePosts = createAsyncThunk("deletePosts",async({id})=>{
    console.log(id,"--28")
      try{
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(res?.data,"user deleted");
        return res?.data;
      }catch(error){
        console.error(error.message);
      }
  })