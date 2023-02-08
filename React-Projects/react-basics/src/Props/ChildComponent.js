import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetmethod('Jordan')}>Child</button>
    </div>
  )
}

export default ChildComponent

