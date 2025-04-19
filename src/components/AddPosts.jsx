import React, { useState } from 'react';
import { addPosts } from '../api/crudApis';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AddPosts = () => {
    const dispatch = useDispatch();
    const [postData,setPostData]=useState({
        title:"",
        body:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(postData);
       dispatch( addPosts({title:postData.title,body:postData.body}));
       toast.success("Post added successfully!");
        setPostData({
            title:"",
            body:""
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input placeholder='Enter a title' value={postData.title} name='title' onChange={(e)=>setPostData({...postData,[e.target.name]:e.target.value})}/>
           <input placeholder='Enter a body' value={postData.body} name='body' onChange={(e)=>setPostData({...postData,[e.target.name]:e.target.value})}/>
           <button type='submit'>Add Post</button>
        </form>
     
    </div>
  )
}

export default AddPosts
