import React from 'react';
import './Menu.css';
import { Link} from 'react-scroll';
import A from "../../Assist/Image/SM.png";
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
                <Link to="1" >
                <FcHome/>
                Home
                </Link>
            </div>
            <div className="nav-link">
                <Link to="2" >
                <FcAbout/>
                About
                </Link>
            </div>
            <div className="nav-link">
            <Link to="3" >
            <FcReadingEbook/>
                Education
                </Link>
            </div>
            <div className="nav-link">
            <Link to="4" >
            <FcBiotech/>
                Tech Stack
                </Link>
            </div>
            <div className="nav-link">
            <Link to="5" >
            <FcVideoProjector/>
                Project
                </Link>  
            </div>
            <div className="nav-link">
            <Link to="6" >
            <FcPortraitMode/>
                Work Experince
                </Link>  
            </div>
            <div className="nav-link">
            <Link to="7" >
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
                <Link to="1">
                <FcHome title="Home"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="2">
            <FcAbout title="About"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="3">
            <FcReadingEbook title="Education"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="4">
            <FcBiotech title="Tech Stack"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="5">
            <FcVideoProjector title=" Project"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="6">
            <FcPortraitMode title=" Work Experince"/>
                </Link>
            </div>
            <div className="nav-link">
            <Link to="7">
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