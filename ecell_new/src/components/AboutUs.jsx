import React from 'react'
import './about-us.css';

export default function AboutUs(){

  return (
  <div className="works">
    <div className="container">

        <div className="left">
            <div className="innerleft">
                <div className="top">
                   <img src="https://bit.ly/3wOVkCu" />
                </div>
                <div className="bottom">
                   <img src="https://bit.ly/3yTglPf" />
                </div>
           </div>
          <div className="innerright">
              <div className="top">
                 <img src="https://bit.ly/3sU9f9m"/>
              </div>
              <div className="bottom">
                 <img src="https://bit.ly/3PG1yNF"/>
              </div>
          </div>
       </div>


       <div className="right">
          <div className="sec-title">
            <div className="sub-title">About Us</div>
            <h2>IIT INDORE   E-CELL</h2>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat duis aute irure dolor in repre henderit volupte velit esse.</div>
            <div className="link-box clearfix"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></a></div>
         </div>
      </div>

    </div>
  </div>

  )
}
