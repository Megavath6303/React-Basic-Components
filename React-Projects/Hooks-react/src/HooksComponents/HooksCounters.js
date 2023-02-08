import React ,{useState} from 'react'

function HooksCounters() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

  const increment = ()  => {
     for( let i=0;i<5;i++){
        setCount(prevCount => prevCount + 1)
     }
  }
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={() => setCount(initialCount)}>reset</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrememt</button>
        <button onClick={increment}>incrementto5</button>
    </div>
  )
}

export default HooksCounters