import React from 'react'
import { useNavigate } from 'react-router-dom'

function Transaction() {
    const navigate = useNavigate()
  return (
    <div>
        Transaction Sucsessful!!<br/><br/>
        <button onClick={() => {navigate(-1)}} >Go back</button>
    </div>
  )
}

export default Transaction