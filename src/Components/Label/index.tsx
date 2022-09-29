import React from "react";
import './index.css'
import { BsGearFill } from "react-icons/bs";

function Label() {
  return (
    <label className="label label--style">
      <BsGearFill className="label__icon label__icon--style" />
      Label
    </label>
  )
}

export default Label;