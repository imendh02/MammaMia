import React,{ useState } from 'react'
import OurMenu from './OurMenu';
import './Reservation.css';
function Details() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className='menu-container-tabs'>
        <div className='menu-bloc-tabs'>
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            <span>Starters</span>
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            <span>Breakfast</span>
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            <span>Lunch</span>
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            <span>Dinner</span>  
          </button>
          <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
            <span>Dessert</span>  
          </button>
          <button className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)}>
            <span>Drinks</span>  
          </button>
        </div>
        <div className="menu-content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <OurMenu type="Starters"/>
          </div>
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <OurMenu type="Breakfast"/>
          </div>
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <OurMenu type="Lunch"/>
          </div>
          <div className={toggleState === 4 ? "content  active-content" : "content"}>
            <OurMenu type="Dinner"/>
          </div>
          <div className={toggleState === 5 ? "content  active-content" : "content"}>
            <OurMenu type="Dessert"/>
          </div>
          <div className={toggleState === 6 ? "content  active-content" : "content"}>
            <OurMenu type="Drinks"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details