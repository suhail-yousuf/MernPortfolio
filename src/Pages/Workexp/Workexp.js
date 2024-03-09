import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {MdOutlineWorkHistory} from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import "./workexp.css"
const Workexp = () => {
  return (
   <>
   <div className=" work" id="6">
    <div className="container  work-exp">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experience</h2>
    <hr/>
    <VerticalTimeline lineColor='#138781'>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="01-05-2021  -  01-08-2021 "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#1e1e2c' }}
    icon={<MdOutlineWorkHistory />}>
    <h3 className="vertical-timeline-element-title">Junior Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Rinor,Skardu</h4>
    <p>
    3-month intensive internship was
an eye-opening experience for
me. During these 3 months at
Rinor, I learned a lot about the
JavaScript ecosystem from
vanilla JavaScript to React.js for
the Frontend and Node.js,
Express.js, and MangoDB for the
backend.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#1e1e2c' }}
    icon={<MdOutlineWorkHistory />}>
    <h3 className="vertical-timeline-element-title">Mern Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Rinor,Skardu</h4>
    <p>
    I have been actively engaged in the development of an ERP (Enterprise Resource Planning)
     system tailored for a Destination Management Company (DMC). My primary responsibilities 
     involve crafting robust React components to enhance the user interface, ensuring a seamless
      and intuitive experience for end-users. Additionally, I am actively involved in building and 
      optimizing the RESTful API that serves as the backbone for data communication and integration 
      within the ERP system. This dynamic project allows me to leverage my skills in both front-end
       and back-end development, contributing to the overall efficiency and functionality of the DMC's 
       enterprise resource planning infrastructure.
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
   </div>
   </>
  )
}

export default Workexp