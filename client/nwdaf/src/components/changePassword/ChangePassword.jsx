import React, { useState, useEffect  } from "react";
import { Modal, Row, Col } from "react-bootstrap";
// import Button from "../buttons/Button";

import { loggedInUserId } from "../../utils/Helper";
import ErrorMessage from "../../common/error/ErrorMessage";
import Button from "../../common/buttons/button";
import MessagePrompt from "../../common/messagePrompt/MessagePrompt";
// import { OK, LOGIN_URL_FULL } from "../../utils/constants";
// import { putAuthApi } from "../../axios/axios";
// import ErrorMessage from "../error/ErrorMessage";
// import MessageModal from "../messagemodal/MessageModal";
// import Auth from "../../auths/auth";
const ChangePassword = (props) => {
  const passwordHeading = "Change Password";
  const passwordSuccesfullMessage = "Password changed successfully.";
  const [message, setMessage] = useState("");
  const [messageModalShow, setMessageModalShow] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    userId: loggedInUserId(),
  });

  const [errors, setErrors] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
    passwordMisMatch: false,
  });

  const updateIndividualFormData = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onHide = () => {
    setErrors({
      oldPassword: false,
      newPassword: false,
      confirmPassword: false,
      passwordMisMatch: false,
    });
    props.onHide();
  };

  const handleFormValidation = () => {
    const error = { ...errors };

    error.oldPassword = formData.oldPassword === "";
    error.newPassword = formData.newPassword === "";
    error.confirmPassword = formData.confirmPassword === "";
    error.passwordMisMatch = formData.confirmPassword !== formData.newPassword;

    setErrors(error);

    return !(
      error.oldPassword ||
      error.newPassword ||
      error.confirmPassword ||
      error.passwordMisMatch
    );
  };

  const onFormSubmit = () => {
    // if (handleFormValidation()) {
    //   onHide();
    //   putAuthApi(`${LOGIN_URL_FULL}/changepassword`, formData, (response) => {
    //     setMessage(passwordSuccesfullMessage);
    //     setMessageModalShow(true);
    //     Auth.logOut();
    //   });
    // }
  };
    
  return (
    <>
      <Modal
        show={props.show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {passwordHeading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="password-row">
            <Col md lg={12}>
              <label className="form-label required-field">
                Current password
              </label>
              <input
                type="password"
                name="oldPassword"
                required
                onChange={updateIndividualFormData}
                className="form-control m-textfield"
                placeholder="Enter current password"
              />
              {errors.oldPassword && (
                <ErrorMessage message="Current password is required" />
              )}
            </Col>
          </Row>
          <Row className="password-row">
            <Col md lg={12}>
              <label className="form-label required-field">New password</label>
              <input
                type="password"
                name="newPassword"
                onChange={updateIndividualFormData}
                className="form-control m-textfield"
                placeholder="Enter new password"
              />
              {errors.newPassword && (
                <ErrorMessage message="New password is required" />
              )}
            </Col>
          </Row>
          <Row>
            <Col md lg={12}>
              <label className="form-label required-field">
                Confirm new password
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={updateIndividualFormData}
                className="form-control m-textfield"
                placeholder="Enter new password again"
              />
              {errors.confirmPassword && (
                <ErrorMessage message="Confirm password is required" />
              )}
              {errors.passwordMisMatch && (
                <ErrorMessage message="New Passwords doesn't match" />
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            csstype="secondary"
            onClick={onHide}
            customclass="mr-15"
            text="Cancel"
          />
          <Button csstype="primary" onClick={onFormSubmit} text="Change" />
        </Modal.Footer>
      </Modal>
      <MessagePrompt
        show={messageModalShow}
        onHide={() => setMessageModalShow(false)}
        heading={passwordHeading}
        message={message}
        okBtnText={"OK"}
      />
    </>
  );
};

export default ChangePassword;
