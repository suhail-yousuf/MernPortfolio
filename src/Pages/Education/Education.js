import React from 'react'
import {MdSchool} from "react-icons/md"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css"
const Education = () => {
  return (
   <>
    <div className="education" id="3">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Educational Background</h2>
    <hr/>
   
    
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018-2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}>
    <h3 className="vertical-timeline-element-title">Pre-Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">FBISE</h4>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}>
    <h3 className="vertical-timeline-element-title">BS-Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">UOB Skardu</h4>

  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
   </>
  )
}

export default Education