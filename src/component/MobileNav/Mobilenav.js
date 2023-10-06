import React from 'react'
import "./Mobilenav.css"
import {RxDropdownMenu} from "react-icons/rx"
const Mobilenav = () => {
  return (
    <>
       <div className="mobile-nav">
        <div className="mobile-nav-header">
          <RxDropdownMenu size={30}/>
        </div>
       </div>
    </>
  )
}

export default Mobilenav