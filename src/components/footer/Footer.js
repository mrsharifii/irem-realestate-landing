import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div id="contact" className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
                <div className='col'>
                    <p>Tel: <span>0216-589-26-29</span></p>
                    <p>Whatsapp: <span>0532-421-43-99</span></p>
                    <p>Address: <span>No.48 Tulin St Maltepe Istanbul</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
