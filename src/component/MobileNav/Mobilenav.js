import React,{useState}from 'react'
import "./Mobilenav.css"
import { Link} from 'react-scroll';
import {FcHome ,FcAbout ,FcPortraitMode ,FcBiotech,FcReadingEbook,FcVideoProjector,FcContacts} from "react-icons/fc"
import {RxDropdownMenu} from "react-icons/rx"
import {AiOutlineMenuFold} from "react-icons/ai"
const Mobilenav = () => {
  const [open,setOpen] = useState(false)

//handle open
     const handleOpen = () =>{
      setOpen(!open);
     }
// handle menu click
   const handleMenuClick = () => {
    setOpen(false);
   }

  return (
    <>
       <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (<AiOutlineMenuFold size={30}  className="mobile-nav-icon"  onClick={handleOpen}/>)
          :( <RxDropdownMenu size={30}  className="mobile-nav-icon" onClick={handleOpen}/>) }
          <span className="mobile-nav-title">Menu</span>
        </div>
        {open && (
         <div className="mobile-nav-menu">
         <div className="nav-items">
         <div className="nav-item">
             <div className="nav-link">
                 <Link to="1" 
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 onClick={handleMenuClick}>
                 <FcHome/>
                 Home
                 </Link>
             </div>
             <div className="nav-link">
                 <Link to="2"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100} 
                 onClick={handleMenuClick}>
                 <FcAbout/>
                 About
                 </Link>
             </div>
             <div className="nav-link">
             <Link to="3" 
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}
             onClick={handleMenuClick}>
             <FcReadingEbook/>
                 Education
                 </Link>
             </div>
             <div className="nav-link">
             <Link to="4"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}
             onClick={handleMenuClick} >
             <FcBiotech/>
                 Tech Stack
                 </Link>
             </div>
             <div className="nav-link">
             <Link to="5"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}
             onClick={handleMenuClick} >
             <FcVideoProjector/>
                 Project
                 </Link>  
             </div>
             <div className="nav-link">
             <Link to="6"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100} 
             onClick={handleMenuClick}>
             <FcPortraitMode/>
                 Work Experince
                 </Link>  
             </div>
             <div className="nav-link">
             <Link to="7" 
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}
             onClick={handleMenuClick}>
             <FcContacts/>
                 Contact
                 </Link>  
             </div>
         </div>
     </div>
         </div>
        )}
       </div>
    </>
  )
}

export default Mobilenav