import React from 'react';
import './Menu.css';
import A from "../../Assist/Image/SM.png";
import { Link} from 'react-scroll';
import {FcHome ,FcAbout ,FcPortraitMode ,FcBiotech,FcReadingEbook,FcVideoProjector,FcContacts} from "react-icons/fc"
const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <div className="navbar-profile-pic">
        < img src={A} alt="Profile pic" />
    </div>
    <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
                <Link to="1" 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}>
                <FcHome/>
                Home
                </Link>
            </div>
            <div className="nav-link">
                <Link to="2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100} >
                <FcAbout/>
                About
                </Link>
            </div>
            <div className="nav-link">
            <Link to="3" 
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}>
            <FcReadingEbook/>
                Education
                </Link>
            </div>
            <div className="nav-link">
            <Link to="4"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100} >
            <FcBiotech/>
                Tech Stack
                </Link>
            </div>
            <div className="nav-link">
            <Link to="5"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100} >
            <FcVideoProjector/>
                Project
                </Link>  
            </div>
            <div className="nav-link">
            <Link to="6"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100} >
            <FcPortraitMode/>
                Work Experince
                </Link>  
            </div>
            <div className="nav-link">
            <Link to="7" 
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}>
            <FcContacts/>
                Contact
                </Link>  
            </div>
        </div>
    </div>
     </>
    ):(
     <>
     <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
                <Link to="1"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}>
                <FcHome title="Home"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="2" 
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}>
            <FcAbout title="About"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="3"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}>
            <FcReadingEbook title="Education"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="4"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}>
            <FcBiotech title="Tech Stack"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="5"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}>
            <FcVideoProjector title=" Project"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="6"
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}>
            <FcPortraitMode title=" Work Experince"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="7" 
             spy={true}
             smooth={true}
             offset={-100}
             duration={100}>
            <FcContacts title=" Contact Us"/>
                </Link>
            </div>
        </div>
    </div>
     </>
    ) }
  </>
  );
};

export default Menu