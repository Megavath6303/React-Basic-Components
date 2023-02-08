import React from 'react'

function Useprop(props){
    return (
        <>
        <h1>Hello {props.name}</h1>
        {props.children}
        </>
    )
    
}

export default Useprop
