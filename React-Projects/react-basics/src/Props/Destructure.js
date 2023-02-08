// import React from 'react'

// function Destructure({name,children}) {
//   return (
//     <div>
//       <h1>my name is {name}</h1>
//       {children}
//     </div>
//   )
// }

// export default Destructure

// import React from 'react'

// function Destructure(props) {
//     const {name,children} = props
//   return (
//     <div>
//       <h1>my name is {name}</h1>
//       {children}
//     </div>
//   )
// }

// export default Destructure
// import React, { Component } from 'react'

// export class Destructure extends Component {
//   render() {
//     return (
//       <div>
//          <h1>my name is {this.props.name}</h1>
//        {this.props.children}
//       </div>
//     )
//   }
// }

// export default Destructure
import React, { Component } from 'react'

export class Destructure extends Component {
  render() {
    const {name,children} = this.props
    return (
      <div>
         <h1>my name is {name}</h1>
       {children}
      </div>
    )
  }
}

export default Destructure

