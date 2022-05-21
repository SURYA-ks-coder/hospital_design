import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer'>
        <div className="container" id='space'>
            <div className="headersec">
            <ul>
                <li>
                <a className="headsec"  href="#">Home</a>
                </li>
                <li>
                <a className="headsec" href="#">About</a>
                </li>
                <li>
                <a className="headsec" href="#">Appoinment</a>
                </li>
                <li>
                <a className="headsec" href="#">Service</a>
                </li>
                <li>
                <a className="headsec" href="#">Join Us</a>
                </li>
            </ul>
            </div>
            <div className="patient">
            <ul>
                <li>
                    <a href="">Ash for a Health Questine</a>
                </li>
                <li>
                    <a href="">Search for Doctor</a>
                </li>
                <li>
                    <a href="">Search for Clinics</a>
                </li>
                <li>
                    <a href="">Book Diagnositic Test</a>
                </li>
                <li>
                    <a href="">Book for a body Checkup</a>
                </li>
                <li>
                    <a href="">Read Health Articles</a>
                </li>
                <li>
                    <a href="">Consult a Doctor</a>
                </li>
            </ul>
        </div>
        <div className="socialmedia">
            <ul>
                <li>
                    <a href="">Linkedin</a>
                </li>
                <li>
                    <a href="">You Tube</a>
                </li>
                <li>
                    <a href="">FaceBook</a>
                </li>
                <li>
                    <a href="">Twitter</a>
                </li>
                <li>
                    <a href="">intagram</a> 
                </li>
            </ul>
        </div>

        </div>
        <h6 className='copyright'>Copy right 2022</h6>

       
    </div>
  )
}

export default Footer