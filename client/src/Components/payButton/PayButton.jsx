import React from "react";
import axios from "axios";

export default function PayButton({ products }) {
  const handleCheckOut = () => {
    console.log(products);
    axios
      .post("http://localhost:8800/stripe/checkout", {
        products,
      })
      .then((res) => {
        console.log(res);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={handleCheckOut} className="btn-check">Checkout</button>
    </>
  );
}
