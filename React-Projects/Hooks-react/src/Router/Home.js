import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        Home<br/>
        <button onClick={() => {navigate('Transaction')}} >Make Payment</button>
    </div>
  )
}

export default Home