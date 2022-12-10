import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { MenuItems } from './MenuItems';

export const DiscoverMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchAllMenu = async () => {
      try {
        const res = await axios.get('http://localhost:8800/menu');
        setMenu(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMenu();
  }, []);
  return (
    <>
      {MenuItems.map((item, index) => {
        return (
          <div id='DiscoverMenu' key={index}>
            <div className={item.class}>
              <small>Starts At 08:00 AM</small>
              <h1>{item.title} Menu</h1>
              <div>
                <img src='/Images/Polygon.svg' alt='' />
              </div>
            </div>
            <div className='MenuItems'>
              {menu.map((food) =>
                food.Menu == item.title ? (
                  <div className='MenuFood'>
                    <div key={food.id} className='div'>
                      <h1>{food.title}</h1>
                      <h2>${food.price}</h2>
                    </div>
                    <p>{food.description}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DiscoverMenu;
