import React from 'react'
import './Featured.css'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'

const Featured = () => {
  return (
    <div className='featured' id="topcases">
        <h1 className='featured-text'>Top Cases</h1>
        <p>Based on district demands</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={House1} alt='' />
            <img src={Bed1} alt='' />
            <img src={Bed2} alt='' />
            <img src={Kitchen} alt='' />
            <img src={Bathroom} alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>MALTEPE, ZÜMRÜTEVLER</h2>
                    <p>Apartment for Sale</p>
                    <p className='price'>$255,000</p>
                </div>
                <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>Bedrooms:</p><p>3</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>2</p>
                    </div>
                </div>
                <div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>157</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='span-2 right-img-details'>
            <p>The apartments are situated in a residential complex with rich on-site facilities in Istanbul Maltepe. The complex offer 24/7 security, extensive communal areas, swimming pools and sports areas.</p>
        </div>
        </div>
        
        {/* Second Section*/}
        <div className='container'>
            <img className='order-2' src={Bed3} alt='' />
            <img className='order-3' src={Bed4} alt='' />

            <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


            <img className='order-4' src={Bathroom2} alt='' />
            <img className='order-5' src={LivingRoom} alt='' />

            <div className='span-2 right-img-details order-7'>
            <p>Commercial properties for sale are located in a central location of Istanbul, Maltepe. Commercial properties are in a complex with rich features such as car parking areas and 24/7 security.</p>
            </div>

            <div className='span-3 img-details order-6'>
                <div className='top'>
                    <h2>MALTEPE, CEVIZLI</h2>
                    <p>Office for Sale</p>
                    <p className='price'>$365,000</p>
                </div>
                <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>rooms:</p><p>3</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>1</p>
                    </div>
                </div>
                <div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>85</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est Payment:</p><p>$26,797/mo</p>
                    </div>
                </div>
            </div>
        </div>

        </div>


    </div>
  )
}

export default Featured