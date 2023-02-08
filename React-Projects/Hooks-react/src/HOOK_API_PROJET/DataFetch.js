import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ApiFetch from './ApiFetch'

function DataFetch() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
        console.log(res)
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  },[])
  return (

        posts.map(post => <ApiFetch  key={post.id} post={post}/>)
    
  )
}

export default DataFetch