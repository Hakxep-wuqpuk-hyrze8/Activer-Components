import React from "react";
import InputFormFrame, { inputFormStyle } from "./InputFormFrame";

function InputForm() {
  return (
    <InputFormFrame formStyle={inputFormStyle.disabled} />    
  );
}

export default InputForm;
