import React from 'react'
import { Bookmark } from "lucide-react";


export default function Card(props) {

  console.log(props.company);

  return (

    <>
      <div className="parent">
        <div className="card">
          <div className="top">
            <img src={props.brandlogo} />
            <button className="save-btn">
              Save <Bookmark size={16} />
            </button>
          </div>

          <div className="center">
            <h3>
              {props.companyName} <span>5 days ago</span>
            </h3>
            <h2>{props.post}</h2>
            <div className='centerbtn'>
            <button className='btn1'><h4>{props.tag1}</h4></button>
            <button className='btn2'><h4>{props.tag2}</h4></button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <div className="bottom">
            <div>
              <h3>${props.payPerHour}/hour</h3>
              <p>{props.location},India</p>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
