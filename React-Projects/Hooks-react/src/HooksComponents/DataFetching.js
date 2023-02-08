import React,{useState,useEffect} from 'react'
import axios from 'axios'

// const Container ={
//   display :'flex',
//   backgroundColor : 'blue',
//   height:'100vh',
//   width:'100%'
// }
// const ui ={
//   height :'250px',
//   width : '300px',
//   backgroundColor : 'white',
//   marginTop : '50px',
//   padding : '20px 30px',
//   display :'flex',
  
  

// }
// const li ={
//   listStyle : 'none',
//   fontSize :'18px',
//   marginLeft:'100px',
// }
function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products')
    .then(res =>{
        console.log(res)
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  },[])
  return (
      <div className='content'>
        <ul className='ui'>
            {
        posts.map(post =>(
         <li key={post.id}> 
          <img src={post.image} width='100px' alt='imge'/> <br></br>
          {post.title}
          <br></br>
         <h3> Rs. {post.price} </h3>
         <div className='break'><hr></hr></div>
          </li>))
            }
        </ul>
    </div>
  )
}

export default DataFetching