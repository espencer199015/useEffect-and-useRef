import React from 'react';
import './App.css';  // Add CSS import for styling if needed
import Deck from './components/Deck';
import DrawButton from './components/DrawButton';

function App() {
  return (
    <div className="App">
      <h1>Deck of Cards</h1>
      <Deck />
      <DrawButton />
    </div>
  );
}

export default App;