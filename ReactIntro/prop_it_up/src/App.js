import React from 'react';
import logo from './logo.svg';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    
    <div className ="container">

      <div>
        <PersonCard
          name="Jane Doe"
          age= {30}
          hair="lavender"

        />
        <PersonCard
          name="John Doe"
          age= {32}
          hair="brown"
        />
        <PersonCard
          name="Jennifer Doe"
          age= {27}
          hair="blonde"
        />
        <PersonCard
          name="Jason Doe"
          age= {27}
          hair="red"
        />
      </div>

    </div>
  );
}

export default App;
