import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchActions } from '../store/postsSlice';

const Posts = () => {

    const dispatch = useDispatch();
    //const posts = useSelector((state)=>state.) 
  return (
    <div>
      <button onClick={(e)=>dispatch(fetchActions())}>Fetch posts</button>
    </div>
  )
}

export default Posts
