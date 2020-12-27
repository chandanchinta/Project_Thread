import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { Carousel, Modal, Card, Button } from "react-bootstrap";

function ItemModal(props) {
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
        <Carousel style={{ width: "auto", height: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.ImageURL}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <h4>
          <strong>{props.BasePrice}</strong>
        </h4>
        <p>{props.Description}</p>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <IconButton>
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderRoundedIcon />
          </IconButton>
        </div>
        <Button onClick={props.closeModal}>Close</Button>
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
      <a style={{ cursor: "pointer" }} onClick={OpenModal}>
        <Card className="bg-white text-black ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.ImageURL}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Title>
            <center>
              <h3>{props.Name}</h3>
              <div>
                <IconButton>
                  <AddShoppingCartIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderRoundedIcon />
                </IconButton>
              </div>
            </center>
          </Card.Title>
          <Card.Body style={{ padding: "2rem" }}>
            <Card.Text>{props.Description}</Card.Text>
            <Card.Text>{props.BasePrice}</Card.Text>
          </Card.Body>
        </Card>
      </a>
      <ItemModal Show={modal} closeModal={CloseModal} {...props} />
    </div>
  );
}

export default Item;
