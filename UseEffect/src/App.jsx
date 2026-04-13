import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {


  const [num, setnum] = useState(0);
  useEffect(function () {
    console.log("useEffect is running...");

  },[])

  return (
    <div>

      <h1>{num} </h1>
      <button onClick={() => {
        setnum(num+1);
      }}>submit</button>
    </div >
  )
}

export default App


