import React from "react";
import { useDispatch } from "react-redux";
import { DECREASE, DLT_CART, INCREASE } from "../features/CartSlice";

const Cartitems = ({ item }) => {
  const dispatch = useDispatch();
  const increase = (id) => {
    dispatch(INCREASE(id));
  };
  const decrease = (id) => {
    if (item.qty === 1) {
      dispatch(DLT_CART(id));
    } else {
      dispatch(DECREASE(id));
    }
  };

  const dltcart = (id) => {
    dispatch(DLT_CART(id));
  }
  return (
    <div className="cart-item">
      <img src={item.image} alt="" />
      <span>
        <h1> {item.title} </h1>
        <h3>Rate : {item.price} </h3>
        <div className="increase d-flex flex-row">
          <button className="btn btn-primary" onClick={() => decrease(item.id)}>
            -
          </button>
          <h3>Qty : {item.qty}</h3>
          <button className="btn btn-success" onClick={() => increase(item.id)}>
            +
          </button>
        </div>
      </span>
      <button className="remove-btn" onClick={()=>dltcart(item.id)}>Remove Item</button>
    </div>
  );
};

export default Cartitems;
