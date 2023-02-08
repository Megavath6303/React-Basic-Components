import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    Increment = () => {
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
        
    }

    IncrementToFive = () => {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment() 
    }
    
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={this.Increment}>+1</button>
        <button onClick={this.IncrementToFive}>+5</button>
      </div>
    )
  }
}

export default Counter
