import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        input: true
      }
    }
  render() {
      if(this.state.input) return <h1> wello come back</h1>
      else return <h2>opps</h2>
    
  }
}

export default Conditional