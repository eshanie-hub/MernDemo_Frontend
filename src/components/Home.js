import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
  
  const[state, setState] = useState({
    posts: []
  })


  useEffect(() => {
  axios.get("http://localhost:8000/post/").then(res =>{
      if(res.data){
        setState({
          posts:res.data
        })
      }
    })
  }, [state]);


  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`)
    .then((res) => {
      alert("Deleted successfully");
      
    })
  }
  

  return (
    <div className='container'>
       
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Post Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/get/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.topic}
                    </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  {' '}
                  <a className='btn btn-danger' onClick={() => onDelete(posts._id)}>
                    <i className='fas fa-edit'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <label>
            <button className='btn btn-success'>
                <a href="/add" style={{textDecoration: 'none', backgroundColor: '#198754', color:'white'}}>
                    create new Post
                </a>
            </button>
          </label>
        </table>
      </div>
  )
}

export default Home
