import React, { Component } from 'react'
import ApiPrintList from './ApiPrintList'

class FetchApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[]
      }
    }
 async componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const res = await fetch(url)
    const posts = await res.json()
    console.log(posts)
 }
    
  render() {
    return (
      posts.map(post => <ApiPrintList key = {post.id} post={post}/>)
    )
  }
}

export default FetchApi
