import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { Carousel, Modal, Card } from "bootstrap";

function ItemModal(props) {
  return (
    <Modal
      show={props.Show}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.Name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.BasePrice}</h4>
        <p>{props.Description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Item(props) {
  const [Modal, setModal] = useState(false);
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };

  return (
    <a style={{ cursor: "pointer" }} onClick={OpenModal}>
      <Card className="bg-white text-black ">
        {/* <Card.Img src={product.ImageURL} alt="Card image" /> */}
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
      <ItemModal show={Modal} closeModal={closeModal} {...props} />
    </a>
  );
}

export default Item;
