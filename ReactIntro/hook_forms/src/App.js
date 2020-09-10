import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <Form input={state} setInput={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
