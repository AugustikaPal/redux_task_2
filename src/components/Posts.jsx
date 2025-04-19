import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss";
import { fetchPosts } from "../api/crudApis";
import AddPosts from "./AddPosts";
import DeletePosts from "./DeletePosts";

const Posts = () => {
  const dispatch = useDispatch();
  const { loading, post, errors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchPosts());
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }
  if (errors) {
    return <p>Error loading posts</p>;
  }

  return (
    <div>
      <AddPosts/>
      <button onClick={handleRefresh}>Refresh</button>
      {post.slice(0,8).map((item) => (
        <ul key={item.id} className="">
          <li>{item.title}</li>
          <li>{item.body}</li>
          <DeletePosts id={item.id}/>
          <br />
        </ul>
      ))}
    </div>
  );
};

export default Posts;
