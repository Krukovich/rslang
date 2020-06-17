import React from "react";
import { Alert } from "react-bootstrap";

const AlertRed = (props) => {
  if (props.showAlert) {
    return (
      <Alert variant="danger" onClose={props.onSubmit} dismissible>
        <Alert.Heading>{props.HeadText}</Alert.Heading>
        <p>{props.MainText}</p>
      </Alert>
    );
  }
  return props.children;
}

export { AlertRed }
