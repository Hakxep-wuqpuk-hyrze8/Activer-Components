import React from 'react';
import './App.scss';
import ButtonFrame, { allButtonStyle } from './Components/Button';
import Card from './Components/Card';
import InputFormFrame, { allInputFormStyle } from './Components/Form/Components/InputForm/InputFormFrame';
import SearchBar from './Components/Form/FormSearchBar';
import DropdownFrame, { allDropdownStyle } from './Components/Form/FromDropdown/DropdownFrame';
import SidebarLink from './Components/SidebarLink';

function App() {
  return (
    <>
      <ButtonFrame buttonStyle={allButtonStyle.primary}/>
      <hr /> 
      <InputFormFrame formStyle={allInputFormStyle.default} />
      <hr />
      <DropdownFrame dropdownStyle={allDropdownStyle.withoutLabel} />
      <hr />
      <SidebarLink />
      <hr />
      <SearchBar />
      <hr />
      <Card />
    </>
  );
}

export default App;
