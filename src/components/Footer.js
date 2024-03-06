import React from 'react'
import './Footer.scss';
import { FaAngleDown } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
      <footer>
  <div class="footer-content">
    <div class="footer-column">
      <h3>Categories</h3>
      <ul>
        <li>Web Builder</li>
        <li>Hosting</li>
        <li>Data Center</li>
        <li>Robotic Automation</li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Contact</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>About</li>
      </ul>
    </div>
   
    <div className="footer-column">
            <h3>United States <FaAngleDown/></h3>

        
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
