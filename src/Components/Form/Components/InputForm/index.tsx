import React from "react";
import './index.css'

function InputForm() {
  return (
    <div className="InputForm InputForm--style">
      <label className="InputForm__title">InputLabel</label>
      <input className="InputForm__inputSection InputForm__inputSection--style" type="text" placeholder="Input Placeholder" />
    </div>
  );
}

export default InputForm;
