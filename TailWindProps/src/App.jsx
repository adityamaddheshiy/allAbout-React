import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';



export default function App() {
 let myObj  = {
  username: "Aditya",
  age:21,
  channel:"ChaiAurCode"
 }

 let myArr = {
  rollNum:1,
  addMission:14,
  emailId:"aditya.2024b15330014@AbstractRange.call.in"
 }

  return (
    <>
      <h1 className='bg-green-500 rounded-xl'>Hello World</h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card  username="ChaiAurCode"  someOBj={myObj} anOthe={myArr}/>
      <br />
      <br />
      <br />
      <Card  username="Aditya"  btnText="visit me"/>

      </div>
    </>
  );
}

