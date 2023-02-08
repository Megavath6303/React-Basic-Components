import React, { Component } from 'react'
import userContext from './Context'

class C extends Component {
    static contextType = userContext
  render() {
    return (
      
       <p>wellcome - {this.Context}</p>
      
    )
  }
}
export default C

