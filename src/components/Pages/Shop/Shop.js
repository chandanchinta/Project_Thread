import React, { useState, useEffect } from "react";
import "./Shop.css";
import axios from "axios";
import { API_PRODUCT } from "../../../API_endpoints";
import { Card, CardColumns, Carousel } from "react-bootstrap";
import UserCheck from "../../utils";
import { useHistory } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    UserCheck().then((status) => {
      console.log("login status", status);
      setLoggedIn(status);
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
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}

export default Products;
