import React from 'react'
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
function Footer() {
  return (
    <footer id="Footer">
        <ul className='foot-items'>
            <li className='foot-item'>
                <h1>Address</h1>
                <p>Eight Avenue 385,<br/>Newyork</p>
            </li>
            <li className='foot-item'>
                <img src="/Images/Logo2.svg" alt=""/>
                <h1>MammaMia!</h1>
                <p>Be the first to know about new collections, special events, and what’s going on at Our Place.</p>
                <ul className='foot-links'>
                    <li><span class="tooltip">Facebook</span><span><FaFacebookF className='foot-icons'/></span></li>
                    <li><span class="tooltip">Twitter</span><span><FaTwitter className='foot-icons'/></span></li>
                    <li><span class="tooltip">Instagram</span><span><FaInstagram className='foot-icons'/></span></li>
                    <li><span class="tooltip">Pinterest</span><span><FaPinterest className='foot-icons'/></span></li>
                </ul>
            </li>
            <li className='foot-item'>
                <h1>Contact Us</h1>
                <p>example@example.com</p>
                <p>+15 890 979 25 52</p>
            </li>
        </ul>
    </footer>
  )
}

export default Footer