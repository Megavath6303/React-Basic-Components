import React, { Component } from 'react'

export class Ref extends Component {
    constructor(props) {
      super(props)
        this.nameRef = React.createRef()
        this.commentRef = React.createRef()
    }
    
 storeData = e =>{
    e.preventDefault()
    console.log(this.nameRef.current.value)
    console.log(this.commentRef.current.value)

 } 
  render() {
    return (
        <>
        <form onSubmit={this.storeData}>
        <div>
            <label htmlFor='user'>Username</label>
            <input type='text' id='user' ref={this.nameRef} />
        </div>             
        <div>
            <label htmlFor='comment'>Comments</label>
            <textarea id='comment' ref={this.commentRef}></textarea>
        </div>
        <button type='submit' >submit</button>
    </form>
    </>
    )
  }
}

export default Ref
