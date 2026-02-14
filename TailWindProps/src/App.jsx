import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';



export default function App() {
  return (
    <>
      <h1 className='bg-green-500 rounded-xl'>Hello World</h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card />

      </div>
    </>
  );
}

