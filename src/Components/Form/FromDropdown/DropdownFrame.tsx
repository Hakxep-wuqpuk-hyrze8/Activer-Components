/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './DropdownFrame.scss';

type Props = {
  dropdownStyle: string
};

export const allDropdownStyle = {
  default: 'default',
  withoutLabel: 'withoutLabel',
};

function DropdownFrame({ dropdownStyle } : Props) {
  return (
    <div className={`dropdown dropdown--${dropdownStyle}`}>
      <label className="dropdown__label">
        Label
      </label>
      <select className="dropdown__main">
        <option>Select Choice</option>
        <option>o</option>
        <option>on</option>
        <option>ona</option>
        <option>onan</option>
        <option>onand</option>
        <option>onando</option>
        <option>onandon</option>
      </select>
    </div>
  );
}

export default DropdownFrame;
