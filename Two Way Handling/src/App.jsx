import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')


  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log("Form Submited",name);
    setName('')
  }

  return (
    <div>
      <div>
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }}>
          <input type="text"
          placeholder='Enter your name'
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
