import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

function OurMenu({ formData, setFormData, type }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchAllMenu = async () => {
      try {
        const res = await axios.get("http://localhost:8800/menu");
        setMenu(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMenu();
  }, [menu]);

  const [checked, setChecked] = useState([]);

  const handleChange = (food) => {
    setChecked(...checked, food);
    console.log(checked);
    console.log(food);
  };

  return (
    <div className="OurMenu">
      <div className="OurMenuItems">
        {menu.map((food) =>
          food.Menu === type ? (
            <div className="OurMenuFood">
              <label class="checkbox">
                <input
                  // checked={checked}
                  type="checkbox"
                  className="check"
                  onChange={() => handleChange(food)}
                />
                <div class="checkmark"></div>
              </label>
              <div className="FoodItem">
                <div key={food.id} className="">
                  <h1>{food.title}</h1>
                  <h2>${food.price}</h2>
                </div>
                <p>{food.description}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default OurMenu;
