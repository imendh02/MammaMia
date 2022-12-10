import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./SingleProduct.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function SingleProduct(props) {
  const location = useLocation();
  const data = location.state?.data;

  const [quantity, setQuantity] = useState(1);

  function handleChange(event) {
    setQuantity(Number(event.target.value));
  }

  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
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
  }, []);

  return (
    <>
      <Navbar />
      {menu.map((food) =>
        food.id === data ? (
          <div id="SingleProduct">
            <div className="product-img">
              <img src="./Images/american-breakfast.jpg" alt="" />
            </div>
            <div className="product-body">
              <h1>{food.title}</h1>
              <h2>$ {food.price}</h2>
              <p>{food.description}</p>
              <div className="add">
                <input
                  type="number"
                  className="quantite"
                  min={1}
                  max={10}
                  placeholder="1"
                  onChange={handleChange}
                />
                <button
                  class="btn"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: food.id,
                        title: food.title,
                        price: food.price,
                        desc: food.description,
                        quantity,
                      })
                    )
                  }
                >
                  <span class="btn-text-one">Add To Cart</span>
                  <span class="btn-text-two">Now!</span>
                </button>
              </div>
              <small>
                <span>Category: </span>
                {food.Menu}
              </small>
            </div>
          </div>
        ) : null
      )}
      <Footer />
    </>
  );
}

export default SingleProduct;
