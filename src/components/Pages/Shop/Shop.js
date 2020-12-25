import React, { useState, useEffect } from "react";
import Shirt1 from "./Images/Shirt1.jpg";
import Shirt2 from "./Images/Shirt2.jfif";
import Shirt3 from "./Images/Shirt3.jpg";
import "./Shop.css";
import Productinfo from "./data";
import axios from "axios";
import { API_PRODUCT } from "../../../API_endpoints";
import { Card, CardColumns, Carousel } from "react-bootstrap";

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
        <CardColumns>
          {products.map((product, index) => {
            return (
              <Card className="bg-white text-black">
                {/* <Card.Img src={product.ImageURL} alt="Card image" /> */}
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product.ImageURL}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>

                <Card.Title>
                  <center>
                    <h3>{product.Name}</h3>
                  </center>
                </Card.Title>
                <Card.Body style={{ padding: "2rem" }}>
                  <Card.Text>{product.Description}</Card.Text>
                  <Card.Text>{product.BasePrice}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    </>
  );
}

export default Products;
