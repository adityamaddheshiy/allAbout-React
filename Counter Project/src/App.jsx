import React, { useState } from 'react'

const App = () => {

  const [Num,setNum]=useState(0);
  function increase(){
    setNum(Num+1);
  }

  function decrease(){
    setNum(Num-1)
  }

  function jump5num(){
    setNum(Num+5);
  }
  return (

    <div>
      <h1 > {Num} </h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onDoubleClick={jump5num}>increase BY 5</button>
    </div>
  )
}

export default App

