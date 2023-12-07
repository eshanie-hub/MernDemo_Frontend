import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

const PostDetails = () => {
  const params = useParams();
  
  const[state, setState] = useState({
    posts: []
  })

  useEffect(() => {
  axios.get(`http://localhost:8000/post/get/${params.id}`).then((res) => {
    if(res.data){
      setState({
        posts:res.data
      })
      
    }
  })
},[params.id]);

  
  
  return (
    <div>
      PostDetails
      <p>{state.posts.topic}</p>
      <p>{state.posts.description}</p>
      <p>{state.posts.postCategory}</p>
      
    </div>

  )
}

export default PostDetails