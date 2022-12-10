import React from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

function MenuCard({ type }) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [menu, setMenu] = useState([]);
  const [quantity, setQuantity] = useState(1);

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

  const dispatch = useDispatch();

  return (
    <div className="MenuCards">
      <Slider {...settings} className="Cards-Slider">
        {menu.map((food) =>
          food.Menu === type ? (
            <div className="MenuCard" key={food.id}>
              <div class="card">
                <div className="card-image">
                  <Link to="/ProductDetails" state={{ data: food.id }}>
                    <img src={"./Images/Breakfast.jpg"} alt="" />{" "}
                  </Link>
                  <div className="card-price">${food.price}</div>
                </div>
                <div class="card-details">
                  <h1 class="text-title">{food.title}</h1>
                  <p class="text-body">{food.description}</p>
                </div>
                <button
                  class="card-button"
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
                  Order Now
                </button>
              </div>
            </div>
          ) : null
        )}
      </Slider>
    </div>
  );
}
export default MenuCard;
