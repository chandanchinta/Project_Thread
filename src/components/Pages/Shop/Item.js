import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { Carousel, Modal, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemModal(props) {
  const _id = props._id;
  const route_to = `/checkOut?id=${_id}`;
  console.log(route_to);
  return (
    <Modal
      show={props.Show}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ height: "90%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.Name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
          <Carousel style={{ width: "50%", height: "50%" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.ImageURL}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </center>
        <h4>
          <strong>{props.BasePrice}</strong>
        </h4>
        <p>{props.Description}</p>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <IconButton>
            <FavoriteBorderRoundedIcon />
          </IconButton>
          <IconButton>
            <AddShoppingCartIcon />
          </IconButton>
          <Link to={route_to}>
            {/* ROUTE TO  */}
            <IconButton>
              <LocalMallIcon />
            </IconButton>
          </Link>
        </div>
        {/* <Button onClick={props.closeModal}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function Item(props) {
  const [modal, setModal] = useState(false);
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };
  return (
    <div>
      <Card className="bg-white text-black ">
        <a style={{ cursor: "pointer" }} onClick={OpenModal}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.ImageURL}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </a>

        <Card.Title>
          <center>
            <h3>{props.Name}</h3>
            <div>
              <IconButton>
                <FavoriteBorderRoundedIcon />
              </IconButton>
              <IconButton>
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton>
                <LocalMallIcon />
              </IconButton>
            </div>
          </center>
        </Card.Title>
        <Card.Body style={{ padding: "2rem" }}>
          <Card.Text>{props.Description}</Card.Text>
          <Card.Text>{props.BasePrice}</Card.Text>
        </Card.Body>
      </Card>
      <ItemModal Show={modal} closeModal={CloseModal} {...props} />
    </div>
  );
}

export default Item;
