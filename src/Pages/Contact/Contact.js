import React, { useState ,useEffect} from 'react'
import "./Contact.css"
import {BsLinkedin,BsGithub,BsFacebook} from "react-icons/bs"
import G from "../../Assist/Image/6.png"
import emailjs from "@emailjs/browser"
//Servus id         service_hud37tw
// private key     tmTzaXUFXe2g8M2NFx7kR
// Public key      TjYXCoIX67Tnvi2hz
// template email id    template_hv6novj
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");

 useEffect(() => emailjs.init("TjYXCoIX67Tnvi2hz"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_hud37tw";
    const templateId = "template_hv6novj";

   const emailPerams = {
    from_name: name,
    to_email:  email,
    message:       msg,
   }


    try {
      setLoading(true);
     const response = await emailjs.send(serviceId, templateId,emailPerams);
     if(response.status === 200){
      console.log("email succefully send ")

     }
     else{
      console.log("email sendding failed")
     }
     // alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <div className=" contact" id="7">
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
                         <a   href="https://linkedin.com/in/suhail-yousuf"> <BsLinkedin color="blue" size={30 } className="ms-2"/></a>
                         <a    href="https://github.com/suhail-yousuf"> <BsGithub color="black" size={30 } className="ms-2"/></a> 
                         <a     href="https://www.facebook.com/sohail.khashchanmasani"><BsFacebook color="blue" size={30 } className="ms-2"/></a> 
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
                      <button onClick ={handleSubmit}      className="button"  type="submit">
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