import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Stepper from './Stepper';
import './Reservation.css';
function Index() {
  return (
    <>
    <Navbar />
    <div id='reservation'>
      <div className='reservation-form'>
        <div className='book'>
        <div className='reserv'>
            <Stepper />
        </div> 
        </div> 
        <div className='timing'>
          <div className='open-time'>
            <h1>Open Timing</h1>
            <h2>+15 890 979 25 52</h2>
            <div>
              <h4>Monday - Friday</h4>
              <p>7 am - 10 pm</p>
              <p>(Breakfast , Lunch , Dinner)</p>
            </div>
            <div>
              <h4>Saturday - Sunday</h4>
              <p>8 am - 11 pm</p>
              <p>(Breakfast , Lunch , Dinner)</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>
                Restaurant & Fine dining,
                <br />
                71 Madison Ave, New York, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Index