import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Navbar from "./navbar";
function M(props) {
  return (
    <div style={{ backgroundColor: "#32354a", height: "100vh" }}>
      <Navbar />
      <Modal.Header>
        <Modal.Title
          id="example-custom-modal-styling-title"
          style={{ marginTop: "3rem", color: "white" }}
        >
          Tutorial #{props.number}, {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "white" }}>
        <p>{props.body}</p>
        <p>{props.ide} </p>
        <Button variant="primary" onClick={props.handleClose}>
          Done!
        </Button>
      </Modal.Body>
    </div>
  );
}

export default M;
