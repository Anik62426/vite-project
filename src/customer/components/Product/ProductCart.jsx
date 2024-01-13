import React from "react";
import "./ProductCart.css"

const ProductCart = ({product}) => {
  return (
  <div className="productCard w-[15rem] m-3 transition-all cursor-pointer"> 
  <div className="h-[20rem]">
    <img className="h-full w-full object-cover object-left-top" src={product.image} 
    alt="Batman"/>
  </div>

  <div className="textPart bg-white p-3">
    <div>
        <p className="font-bold opacity-60">{product.brand}</p>
        <p>{product.title}</p>
    </div>
    <div className="flex items-center space-x-2">
        <p className="font-semibold">{product.selling_price}</p>
        <p className="opacity-50 line-through">{product.price}</p>
        <p className="text-green-400 font-semibold">{product.disscount}</p>
    </div>

  </div>

  </div>
  )
};

export default ProductCart