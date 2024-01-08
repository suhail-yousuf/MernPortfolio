import React from 'react'
import "./About.css";
import image from "../../Assist/Image/1.jpeg";
const About = () => {
  return (
   <>
   <div className="about" id="2" >
    <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={image} alt="Picture" />
  </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
            I'm <b>Suhail Yousuf</b>, a highly creative Full Stack Web Developer with over 4 years of experience in
              full stack web development, backend web development,
              frontend web development, and MERN stack Web development.<br/>
             <b> I specialize in :</b><br/>
Full Stack Web Development using the MERN stack, 
Delivering single-page applications,
Secure websites,
Responsive designs with animations, 
Fast website development.
Real-time notifications and chat features.
My technical skills include :<br/>
<b>Frontend:</b><br/>
HTML
SASS/CSS
JavaScript/ES6
NextJs
React hooks
ReactJs
Redux store,<br/>
<b>Backend:</b><br/>
NodeJs
ExpressJs
API integrations
API development<br/>
<b>Database:</b><br/>
MongoDB
Mysql<br/>
I am also proficient in Firebase, Socket.io, Git, Github, Bitbucket, Putty, Highcharts, D3Js, AWS, Digital Ocean, Kubernetes, and other technical tools.
            </p>
        </div>
    </div>
   </div>
   </>
  )
}

export default About