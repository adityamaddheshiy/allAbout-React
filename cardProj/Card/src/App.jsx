import { useState } from 'react'
import React from 'react'
import './App.css'
import "./index.css"
import Bookmark from 'lucide-react'



export default function App (){

  return (
      <div className="parent">
        <div className="card">
          <div className="top">
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"/>
            <button>Save  <Bookmark /></button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UX/UI Desiner</h2>
          </div>
          <div className="bottom">
            <div>
              <h3>$120</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
        <h1>Hello </h1>
      </div>
  )
}

