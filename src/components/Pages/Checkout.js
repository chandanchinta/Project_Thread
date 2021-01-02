import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { API_PRODUCT_DETAILS, API_ADD_ORDER } from "../../API_endpoints";
import Profile from "./Profile";
import { getUserID } from "../utils";

function Checkout(props) {
  const id = props.location.search.split("=")[1];
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const ProductDetails = () => {
    axios
      .get(API_PRODUCT_DETAILS + `?id=${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setLoading(false);
      })
      .catch(setLoading(true));
  };

  const addOrder = () => {
    getUserID().then((userID) => {
      axios({
        method: "POST",
        data: {
          UserID: userID,
          ProductID: id,
          AddressID: "sample",
        },
        withCredentials: true,
        url: API_ADD_ORDER,
      }).then((res) => console.log(res));
    });
  };

  useEffect(() => {
    ProductDetails();
  }, []);

  return loading ? (
    <div> Loading</div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "horizontal ",
        paddding: "10rem",
        margin: "5rem",
        justifyContent: "space-around",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.ImageURL} />
        <Card.Body>
          <Card.Title>{product.Name}</Card.Title>
          <Card.Text>{product.Description}</Card.Text>
          <Button variant="primary" onClick={addOrder}>
            Proceed
          </Button>
        </Card.Body>
      </Card>
      <Profile></Profile>
    </div>
  );
}

export default Checkout;
