import React from 'react';
import logo from './logo.svg';
import Box from './components/Box';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {
  const [box, makeBox] = useState("No boxes");

  const yourBox = (newBox ) => {
    setCurrentBox( newBox );
  }

  return (
    <>
    <div className="App">
      <Box onNewBox={ yourBox }/>
      <BoxDisplay box = { currentBox } />
      
    </div>

    </>
  );
}

export default App;
