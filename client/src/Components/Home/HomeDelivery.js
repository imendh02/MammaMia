import React from 'react'
import { Link } from 'react-router-dom';

function HomeDelivery() {
  return (
    <div id='HomeDelivery'>
        <div className='delivery-body'>
            <span>Fastest Delivery</span>
            <h1>Fastest Delivery on Your Door Step</h1>
            <button className='delivery-order'><Link to="/Shop"><span>Order Now</span></Link></button>
        </div>
        <img src="./Images/delivery.png" alt='' />
    </div>
  )
}

export default HomeDelivery