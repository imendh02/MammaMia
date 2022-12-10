import React,{ useState } from 'react'
import './Shop.css';
import Cards from "./MenuCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
function Shop() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <>
    <Navbar />
    <div id="Shop">
        <h1 className='head'>Check Our <span>Menu</span></h1>
        <div className="container-tabs">
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                    <img src="./Images/Breakfast.svg" alt="" />
                    <span>Breakfast</span>
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                    <img src="./Images/Lunch.svg" alt="" />
                    <span>Lunch</span>
                </button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                    <img src="./Images/Dinner.svg" alt="" />
                    <span>Dinner</span>  
                </button>
                <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                    <img src="./Images/Dessert.svg" alt="" />
                    <span>Dessert</span>  
                </button>
                <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
                    <img src="./Images/Drinks.svg" alt="" />
                    <span>Drinks</span>  
                </button>
            </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <Cards type="Breakfast"/>
          </div>
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <Cards type="Lunch"/>
          </div>
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <Cards type="Dinner"/>
          </div>
          <div className={toggleState === 4 ? "content  active-content" : "content"}>
            <Cards type="Dessert"/>
          </div>
          <div className={toggleState === 5 ? "content  active-content" : "content"}>
            <Cards type="Drinks"/>
          </div>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Shop