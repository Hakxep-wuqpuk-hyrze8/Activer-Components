import React from "react";
import './index.css';

type Props = {
  style: string;  
};

export const buttonStyle = {
  primary: 'primary',
  secondary: 'secondary',
  primaryOutline: 'primaryOutline',
  secondaryOutline: 'secondaryOutline'
};

function ButtonFrame({ style } : Props) {
  return (
    <button
      className={`button button--${style}`}
      type="button"
    >
    Button
    </button>
  )
}

export default ButtonFrame;
