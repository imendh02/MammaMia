import React from 'react'

function HomeAvailability() {
  return (
    <div id="HomeAvailability">
        <div className='check'>
            <span>Check Availability</span>
            <h1>Working Hours</h1>
            <div className='check-buttons'>
                <button>Reservation</button>
                <button>Contact Us</button>
            </div>
        </div>
        <div className='Availability'>
            <div className='img-poly'><img src="./Images/Polygon.svg" alt="" /></div>
            <div className='day-time'>
            <div className='time'>
                <div>
                    <h2>Sunday To Tuesday</h2>
                    <p>09 <span>:</span> 00</p>
                    <p>22 <span>:</span> 00</p>
                </div>
            </div>
            <div className='time'>
                <div>
                    <h2>Friday To Saturday</h2>
                    <p>11 <span>:</span> 00</p>
                    <p>19 <span>:</span> 00</p>
                </div>
            </div>
            </div>
            <div className='img-poly'><img src="./Images/Polygon.svg" alt=""className='rotate-img'/></div>
        </div>
    </div>
  )
}

export default HomeAvailability