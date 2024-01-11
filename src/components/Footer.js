import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4> <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/> Dehradun</h4>
                   
                    </div>

                    <div className="phone">
                        <h4> <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/> +91-9878788650</h4>
                    </div>

                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/> abcd@gmail.com </h4>
                    </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Hello, My Name is xyz. I am recantly completed my Bachleor
                     of Techonology on Computer Science and 
                    Engineering.
                </p>
                <div className="social"> 
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>

        
        
        </div>
  )
}

export default Footer