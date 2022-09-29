import React from 'react';
import './App.css';
import ButtonFrame, { allButtonStyle } from './Components/Button';
import Label from './Components/Label';
import InputForm from './Components/Form/Components/InputForm'
import FormDropdown from './Components/Form/Components/FromDropdown';

function App() {
  return (
    <>
      <ButtonFrame buttonStyle={allButtonStyle.primary}/>
      <hr />
      <Label />
      <hr /> 
      <InputForm />
      <hr />
      <FormDropdown />
    </>
  );
}

export default App;
