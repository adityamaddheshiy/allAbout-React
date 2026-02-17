import React from 'react'
import { Bookmark } from "lucide-react";


export default function Card() {
  return (
    
    <>
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" />
          <button className="save-btn">
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UX/UI Designer</h2>
        </div>

        <div className="bottom">
          <div>
            <h3>$120</h3>
            <p>Mumbai, India</p>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
    </>
  )
}
