import React from "react";
import './index.scss'
import { BsGearFill } from "react-icons/bs";

function SidebarLink() {
  return (
    <label className="label label--style">
      <BsGearFill className="label__icon label__icon--style" />
      Label
    </label>
  )
}

export default SidebarLink;