import React from 'react'
const StyleContainer = {
    backgroundColor:'yellow',
    marginLeft :'70px',
    marginRight: '70px'
}
const h41 = {
    backgroundColor:'red',
    color:'white'
}
const h42 = {
    backgroundColor:'blue',
    color:'white'
}
const ApiPrintList = ({post}) => {
  return (
    <div style={StyleContainer}>
      <h4 style={h41}>Id:{post.id}</h4>
      <h4 style={h42}>title:{post.title}</h4>
      <h4 style={{
        backgroundColor:'green',
        color:'white'
      }}>body:{post.body}</h4>
    </div>
  )
}

export default ApiPrintList
