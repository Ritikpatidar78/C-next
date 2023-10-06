import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART, INCREASE } from "../features/CartSlice";

const ProductCards = ({ data }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const addcart = (product) => {
    items.map((item) => {
      if (item.id === product.id) {
        dispatch(INCREASE(product.id));
        throw exit;
      }
    });
    dispatch(ADD_CART(product));
  };

  return (
    <div className="product">
      <img src={data.image} alt="" />
      <h1> {data.title} </h1>
      <span>
        <h3>Price : {data.price} </h3>
        <button className="add_cart" onClick={() => addcart(data)}>
          Add to cart
        </button>
      </span>
    </div>
  );
};

export default ProductCards;
