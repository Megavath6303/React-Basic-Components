import React,{useState} from 'react'

function HookWithObject() {
    const [name, setName] = useState({firstname:'',lastname:''})
  return (
    <form>
        <input type='text' value={name.firstname} onChange={e=>setName({...name, firstname: e.target.value})}/>
        <input type='text' value={name.lastname} onChange={e=>setName({...name, lastname: e.target.value})}/>
        <h1>{name.firstname}</h1>
        <h1>{name.lastname}</h1>
        <h1>{JSON.stringify(name)}</h1>


    </form>
  )
}

export default HookWithObject