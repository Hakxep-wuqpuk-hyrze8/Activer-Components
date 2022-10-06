import React from "react";
import ButtonFrame, { allButtonStyle } from "../../../../Button";
import './inputSection.scss';

type Props = {
  inputSectionStyle: string;
};

function InputSection({inputSectionStyle} : Props) {
  return (
    <div className="inputSection">
      <input  
        className={`inputSection inputSection--${inputSectionStyle}`} 
        type="text" 
        placeholder="Input Placeholder" 
      />
      { inputSectionStyle === "withButton" && 
        <div className="inputSection__button">
          <ButtonFrame buttonStyle={allButtonStyle.inputFormButton} /> 
        </div>
      }
    </div>
  );
};

export default InputSection;