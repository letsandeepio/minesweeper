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
          class="nes-badge is-icon"
          rel="noopener noreferrer"
        >
          <span class="is-dark">by</span>
          <span class="is-warning">Sandeep</span>
        </a>
      </div>

      <Header />
      <GameBoard />
      <GameBanner />
    </div>
  );
}

export default App;
