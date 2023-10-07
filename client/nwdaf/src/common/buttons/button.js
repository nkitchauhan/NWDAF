import React from "react";

function Button(props) {
  return (
    <button
      onPress
      data-testid="Button"
      className={`o-btn o-btn-${props.csstype || ""} ${
        props.customclass || ""
      }`}
      type={props.actiontype || "button"}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.text}
    </button>
  );
}

export default Button;
