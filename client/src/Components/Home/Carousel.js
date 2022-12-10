import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Carousel({ data }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
  
    useEffect(() => {timeOut = autoPlay && setTimeout(() => {slideRight();}, 7000);});
  
    const slideRight = () => {
      setCurrent(current === data.length - 1 ? 0 : current + 1);
    };
  
    const slideLeft = () => {
      setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

return (
    <div className="carousel" onMouseEnter={() => {setAutoPlay(false);clearTimeout(timeOut);}} onMouseLeave={() => {setAutoPlay(true);}}>
    <div className="carousel_wrapper">
      {data.map((hero, index) => {
        return (
          /* (condition) ? true : false */
          <div
          key={index}
          className={
            index === current
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
            <img className="card_image" src={hero.image} alt="" />
            <div className="card_overlay">
              <h2 className="card_title">{hero.title}</h2>
              <p className="card_para">{hero.parag}</p>
              <Link to={hero.path}><button data-text="Awesome" class="buttonHome">
                <span class="actual-text">&nbsp;{hero.button}&nbsp;</span>
                <span class="hover-text" aria-hidden="true">&nbsp;{hero.button}&nbsp;</span>
              </button></Link>
            </div>
          </div>
        );
      })}
      <div className="carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
      <div className="carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>
      {/* dwir dwir */}
      <div className="carousel_pagination">
        {data.map((_, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Carousel