import React from "react";
import './index.css'
import ButtonFrame, { buttonStyle } from "./ButtonFrame";

function Button() {
  return (
    <ButtonFrame style={buttonStyle.primaryOutline} />
  )
}

export default Button;