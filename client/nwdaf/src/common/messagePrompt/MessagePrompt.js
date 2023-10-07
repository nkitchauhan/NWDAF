import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../buttons/button";

function MessagePrompt(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          csstype="primary"
          onClick={props.onHide}
          text={props.okBtnText}
        />
      </Modal.Footer>
    </Modal>
  );
}
export default MessagePrompt;
