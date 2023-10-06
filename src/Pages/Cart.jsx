import React from "react";
import Cartitems from "../Components/Cartitems";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const fixed = total.toFixed(2);
  const gst = parseInt(((fixed/100)*18).toFixed(2)) ;
  const sfixed = parseInt(fixed);
  const subtotal = sfixed + gst;
  

  if (!items || items.length === 0) {
    return (
      <>
        <div className="cart-container">
          <span className="empty">Empty...</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {items.map((item) => (
            <Cartitems key={item.id} item={item} />
          ))}
        </div>

        <div className="bill-section">
          <span><h1>Total : {fixed}</h1></span>
          <span><h1>Gst 18% : {gst}</h1></span>
          <span><h1>Subtotal : Rs.{subtotal}</h1></span>
          {/* <h1>
            Total Amount : <br />
            <br />
            Rs. {fixed}
          </h1> */}
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
