import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameBanner from './components/GameBanner';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="App__title">
        <h1>Minesweeper</h1>
        <a
          href="https://github.com/letsandeepio/"
          target="_blank"
          className="nes-badge is-icon"
          rel="noopener noreferrer"
        >
          <span className="is-dark">by</span>
          <span className="is-warning">Sandeep</span>
        </a>
      </div>

      <Header />
      <GameBoard />
      <GameBanner />
    </div>
  );
}

export default App;
