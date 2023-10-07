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
    date="20221 - present"
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
    date="20221 - present"
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
    date="20221 - present"
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
    </VerticalTimeline>
    </div>
   </div>
   </>
  )
}

export default Workexp