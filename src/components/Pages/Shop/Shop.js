import React, { useState, useEffect } from "react";
import Shirt1 from "./Images/Shirt1.jpg";
import Shirt2 from "./Images/Shirt2.jfif";
import Shirt3 from "./Images/Shirt3.jpg";
import "./Shop.css";
import Productinfo from "./data";
import axios from "axios";
import { API_PRODUCT } from "../../../API_endpoints";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_PRODUCT)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="Product-container">
        <h1>Lets Shop bois</h1>
        <div className="Product-Wrapper">
          {products.map((product, index) => {
            return (
              <div key={product._id} className="Product-Card">
                <img src={product.ImageURL} className="Product-Image" />
                <div className="ProductInfo">
                  <div className="ProductTitle">{product.Name}</div>
                  <div className="ProductDesc">
                    {product.Description ? product.Description : "placeHolder"}
                  </div>
                  <div className="ProductPrice">{product.BasePrice}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
