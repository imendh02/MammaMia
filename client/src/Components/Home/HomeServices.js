import React from 'react'

function HomeServices() {
  return (
    <div id='HomeServices'>
        <div className='Service-header'>
            <h1>Our Services</h1>
            <span>Why Choose Us</span>
        </div>
        <div className='grid-services'>
            <div className='service'>
                <div className='service-img'><img src="./Images/delivery-man.svg" alt="" /></div>
                <h2>Food Delivery</h2>
                <p>Feeling Lazy? No worries... We got you! Order at our menu and we will roll up at your place with our delicious dishes.</p>
            </div>
            <div className='service'>
                <div className='service-img'><img src="./Images/room-service.svg" alt="" /></div>
                <h2>Hybrid Service</h2>
                <p>Please sit down, relax and enjoy our ultra-fresh dishes. Our staff will provide you with the best services</p>
            </div>
            <div className='service'>
                <div className='service-img'><img src="./Images/salad.svg" alt="" /></div>
                <h2>Fixed Price Service</h2>
                <p>A good meeting or event starts with even better food. Ask for more details, as weare more than happy to help you select the perfect food selection.</p>
            </div>
            <div className='service'>
                <div className='service-img'><img src="./Images/food-service.svg" alt="" /></div>
                <h2>Pay Online</h2>
                <p>Service you can't find in any restaurant.You don't have to wait for the bill to come to you, you can pay where you are sitting.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeServices