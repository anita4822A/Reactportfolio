import "./HeroImgStyles.css";
 
import React from 'react'
import IntroImg from '../assets/Intro-img1.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src= {IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p>HI, I'M A FRESHER.</p>
            <h1>Front-End Developer</h1>
            <div>
                <Link to="/project " className="btn">PROJECTS</Link>
                <Link to="/contact " className="btn btn-light">CONTACTS</Link>

            </div>

        </div>
    </div>
  )
}

export default HeroImg