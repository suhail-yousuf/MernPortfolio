import React from 'react'
import "./Contact.css"
import {BsLinkedin,BsGithub,BsFacebook} from "react-icons/bs"
import G from "../../Assist/Image/6.png"
const Contact = () => {
  return (
    <>
    <div className=" contact">
        <div className="card card0 boder-0">
            <div className="row">
                <div className="col-md-6  col-lg-6 col-xl-6 col-sm-12">
                 <div className="card1">
                    <div className="row boder-line">
                        <img src= {G} alt="Contacts Us" className="image"/>
                    </div>
                 </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card boder-0 px-4 py-5"> 
                    <div className="row">
                        <div className="row">
                        <h6>Contacts With
                          <BsLinkedin color="blue" size={30 } className="ms-2"/>
                          <BsGithub color="black" size={30 } className="ms-2"/>
                          <BsFacebook color="blue" size={30 } className="ms-2"/>
                        </h6>
                        </div>   
                    <div className="row xp-3 mb-4">
                        <div className="line"/>
                        <small className="or text-center">OR</small>
                        <div className="line"/>
                    </div>
                    <div className="row px-3">
                       <input type="text" name="name" placeholder="Enter Your Name"  className="md-3"  />
                    </div>
                    <div className="row px-3">
                       <input type="email" name="email" placeholder="Enter Your Email"  className="md-3"  />
                    </div>
                    <div className="row px-3">
                       <textarea type="text" name="msg" placeholder="Enter Your Massage"  className="md-3"  />
                    </div>
                    <div className="row px-3">
                      <button className="button"  type="submit">
                        Submit
                      </button>
                    </div>
                     </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact