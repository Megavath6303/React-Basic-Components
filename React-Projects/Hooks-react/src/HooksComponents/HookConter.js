import {useState,useEffect} from 'react'

function HookConter() {
   const [count, setCount] = useState(0)
   const [name , setName] = useState('')
   
// conditional useEffect Hook

   useEffect( () => {
    console.log('updating')
    document.title =`count ${count}`
   },[count])
     return (
    <div>
       
        <h1>count - {count}</h1>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>Increment-1</button>
       
    </div>
  )
}
export default HookConter