import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {
  const [state, setState] = useState({
    topic: "",
    description: "",
    postCategory: ""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setState({...state,[name]:value})
  }

  const onsubmit = (e) => {
    e.preventDefault();

    const {topic, description, postCategory} = state;

    const data = {
      topic: topic, 
      description: description,
      postCategory: postCategory
    }
    console.log(data);

    axios.post("http://localhost:8000/post/add", data)
    .then((res) => {
      if(res.data){
        setState({
          topic: "",
          description: "",
          postCategory: ""
        })
      }
    })
  }

  return (
    <div className='container'>
      CreatePost
      <div class="mb-3 mt-3">
        <label class="form-label">Topic</label>
        <input 
        type="text"
        name="topic" 
        className='form-control'
        placeholder="Enter topic of the post"
        value={state.topic}
        onChange={handleChange}
        />
      </div>
      
      <div class="mb-3">
        <label class="form-label">Description</label>
        <input 
        type="text"
        name="description" 
        className='form-control'
        placeholder="Enter topic of the post"
        value={state.description}
        onChange={handleChange}
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Post Category</label>
        <input 
        type="text"
        name="postCategory" 
        className='form-control'
        placeholder="Enter topic of the post"
        value={state.postCategory}
        onChange={handleChange}
        />
      </div>

      <button className='btn btn-success' type='submit' onClick={onsubmit}>
        <i className='fas fa-check-square'>&nbsp; Save</i>
      </button>
    </div>
  )
}

export default CreatePost