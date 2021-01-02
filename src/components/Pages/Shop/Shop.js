import React, { useState, useEffect } from "react";
import "./Shop.css";
import axios from "axios";
import { API_PRODUCT } from "../../../API_endpoints";
import { CardColumns } from "react-bootstrap";
import { UserCheck } from "../../utils";
import { useHistory } from "react-router-dom";
import Item from "./Item";

function Products() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    UserCheck().then((status) => {
      console.log("login status", status);
      // setLoggedIn(status);
    });
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
      {loggedIn ? (
        <div className="Product-container">
          <h1>SHOP</h1>
          <CardColumns>
            {products.map((product, index) => {
              return (
                <div>
                  <Item
                    key={product._id}
                    _id={product._id}
                    Name={product.Name}
                    BasePrice={product.BasePrice}
                    Description={product.Description}
                    ImageURL={product.ImageURL}
                  ></Item>
                </div>
              );
            })}
          </CardColumns>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}

export default Products;
