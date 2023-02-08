import React, { Children, Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponemt extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greet : 'jonson'
      }
    }
    GreetPerent = child => {
        alert(`hello ${this.state.greet} from ${child}`)
    }
  render() {
    return (
     <ChildComponent  greetmethod ={this.GreetPerent}/>
    )
  }
}

export default ParentComponemt

