import React from "react";
import './inputLabel.scss'

type Props = {
  labelStyle: string
};

function InputLabel({labelStyle} : Props) {
  return (
    <label className={`inputLabel inputLabel--${labelStyle}`} >
      <p>
      InputLabel
      </p>
    </label>
  );
};

export default InputLabel;