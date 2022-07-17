import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Sulabh Chauhan</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Conact</a></li>
      </ul>

      <div className='footer_social'>
        <a href='https://instagram.com' target='_blank'><FiInstagram /></a>
        <a href='https://facebook.com' target='_blank'><FaFacebookF /></a>
        <a href='https://twitter.com' target='_blank'><FaTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Sulabh Chauhan. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer