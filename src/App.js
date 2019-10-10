import React from 'react';
import logo from './logo.svg';
import Counter from './components/Counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Steffano Malaga
        </p>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
