import {useState} from 'react'

function HookName() {
    const [Name, setName] = useState('red')
  return (
    <>
    <h1 >My favorite colour is {Name}</h1>
    <button onClick={() => setName('blue')}>blue</button>
    <button onClick={() => setName('green')}>green</button>
    <button onClick={() => setName('blue')}>blue</button>
    <button onClick={() => setName('yellow')}>yellow</button>
    </>
  )
}

export default HookName