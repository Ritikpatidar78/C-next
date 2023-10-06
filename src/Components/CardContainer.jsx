import React, { useEffect } from "react";
import ProductCards from "./ProductCards";
import { fetching } from "../features/ShopSlice";
import { useDispatch, useSelector } from "react-redux";

const CardContainer = () => {
  const { datas } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetching());
  }, []);

  if(!datas || datas.length === 0){
    return(
      <div className="container">
      <h1 className="all-products-title">Loading...</h1>
     
    </div>
    )
  }

  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {datas.map((data) => (
        <ProductCards key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CardContainer;
