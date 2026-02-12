
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter  =15;

  const addValue = () => {
    console.log("clicked", counter);
    // counter =counter + 1
    setCounter(counter + 1)
  }

  const reMoveValue = () => {
    setCounter(counter -1)
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter value: 5</h2>

      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <br />
      <button onClick={reMoveValue}
      >Remove Value{counter}</button>

      <footer>
        footer :15;
      </footer>
    </>
  )
}

export default App
