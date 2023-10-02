import React from 'react'
import c from "../../Assist/Image/3.jpg"
import D from "../../Assist/Image/4.jpg"
import E from "../../Assist/Image/5.jpg"
import F from "../../Assist/Docs/1.pdf"
import "./Project.css"
const Project = () => {
  return (
    <>
    <div className="continer project">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">My Projects</h2>
    <hr/>
    <p className="pb-3 text-center"> 👉 Hire are my top three recent projects</p>
    <div className="row"  id="ads">
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Full Stack</span>
            <img src={c}   alt="Picture" />
          </div>
          <div className="card-image-overly m-auto mt-3">
            <span className="card-detail-badge">React.js</span>
            <span className="card-detail-badge">Node.js</span>
            <span className="card-detail-badge">Express.js</span>
            <span className="card-detail-badge">MongoDB</span>
          </div>
          <div className="card-body text-center">
            <div className="ad-title m-auto">
              <h5 className="text-uppercase">Point Of Sale</h5>
            </div>
            <a className="ad-btn" href={F}>
              View
            </a>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Mobile App</span>
            <img src={D}   alt="Picture" />
          </div>
          <div className="card-image-overly m-auto mt-3">
            <span className="card-detail-badge">React Native</span>
            <span className="card-detail-badge">IOS / ANDROID</span>
          </div>
          <div className="card-body text-center">
            <div className="ad-title m-auto">
              <h5 className="text-uppercase">Mobile Gaming App</h5>
            </div>
            <a className="ad-btn" href={F}>
              View
            </a>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Backend Development</span>
            <img src={E}   alt="Picture" />
          </div>
          <div className="card-image-overly m-auto mt-3">
            <span className="card-detail-badge">Node.js</span>
            <span className="card-detail-badge">Express.js</span>
            <span className="card-detail-badge">MongoDB</span>
          </div>
          <div className="card-body text-center">
            <div className="ad-title m-auto">
              <h5 className="text-uppercase">Job Portal </h5>
            </div>
            <a className="ad-btn" href={F}>
              View
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
    
    </>


  )
}

export default Project