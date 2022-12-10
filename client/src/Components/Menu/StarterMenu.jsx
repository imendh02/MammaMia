import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const StarterMenu = () => {
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
    <div id='DiscoverMenu-Starter'>
      <div className='header'>
        <img src='./Images/fork.svg' alt='' />
        <br />
        <span>Starters</span>
        <h1>Appetizers</h1>
      </div>
      <div className='MenuItems'>
        {menu.map((food) =>
          food.Menu == 'Starters' ? (
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
};

export default StarterMenu;
