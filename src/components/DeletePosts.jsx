import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deletePosts } from '../api/crudApis';


const DeletePosts = (id) => {
    console.log(id,"--7")

    const dispatch = useDispatch();
    const handleDelete=()=>{
        dispatch(deletePosts(id));
        toast.success("Deleted Successfully")
    }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeletePosts
