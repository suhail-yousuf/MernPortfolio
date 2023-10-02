import React from 'react';
import './Menu.css';
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
                <FcHome/>
                Home
            </div>
            <div className="nav-link">
                <FcAbout/>
                About
            </div>
            <div className="nav-link">
                <FcReadingEbook/>
                Education
            </div>
            <div className="nav-link">
                <FcBiotech/>
                Tech Stack
            </div>
            <div className="nav-link">
                <FcVideoProjector/>
                Project
            </div>
            <div className="nav-link">
                <FcPortraitMode/>
                Work Experince
            </div>
            <div className="nav-link">
                <FcContacts/>
                Contact
            </div>
        </div>
    </div>
     </>
    ):(
     <>
     <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
                <FcHome title="Home"/>
            </div>
            <div className="nav-link">
                <FcAbout title="About"/>
            </div>
            <div className="nav-link">
                <FcReadingEbook title="Education"/>
            </div>
            <div className="nav-link">
                <FcBiotech title="Tech Stack"/>
            </div>
            <div className="nav-link">
                <FcVideoProjector title=" Project"/>
            </div>
            <div className="nav-link">
                <FcPortraitMode title=" Work Experince"/>
            </div>
            <div className="nav-link">
                <FcContacts title=" Contact Us"/>
            </div>
        </div>
    </div>
     </>
    ) }
  </>
  );
};

export default Menu