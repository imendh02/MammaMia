import React from "react";
import "./Cart.css";
import { FaTrash } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import PayButton from "../payButton/PayButton";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="drop-cart">
      <h1>My Cart</h1>
      {products?.map((item) => (
        <div className="drop-cart-item" key={item.id}>
          <div className="drop-cart-img"><img src alt="" /></div>
          <div className="drop-cart-details">
            <h2>{item.title}</h2>
            <div className="drop-cart-price">
              <span>${item.price}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
          </div>
          <div className="drop-cart-delete"><FaTrash onClick={() => dispatch(removeItem(item.id))}/></div>
        </div>
      ))}
      <hr />
      <div className="total">
        <span>Total</span>
        <span>$ {totalPrice()}</span>
      </div>
      <PayButton products={products}></PayButton><br/>
      <button className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</button>
    </div>
  );
};

export default Cart;
