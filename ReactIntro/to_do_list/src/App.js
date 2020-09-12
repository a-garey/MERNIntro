import React, { useState } from 'react';
import Input from './components/Input';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  const [list, setList] = useState;

  return (
   
    <div className="App">
    <Input list={list} setList={setList}/>
      
  
    </div>

  );
};

export default App;
