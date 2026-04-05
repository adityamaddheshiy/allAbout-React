import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0);
  function increase() {
    setNum(Num + 1);
  }

  function decrease() {
    setNum(Num - 1)
  }

  function jump5num() {
    setNum(Num + 5);
  }


  function decreaseby5() {
    setNum(Num - 5);
  }
  return (

    <div>
      <h1 > {Num} </h1>
      <div className="btn">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={jump5num}>Increase BY 5</button>
        <button onClick={decreaseby5}>Decrease By 5</button>
      </div>
    </div>
  )
}

export default App

