import React, { useEffect, useState } from 'react';
import { Header, ControlPanel, Footer, GamePanel, GameOverModal } from './components';
import { LEVELS } from './constants'
import './assets/styles/App.css'

let timerID = undefined;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState("0");
  const [numMines, setNumMines] = useState(0);
  const [stopWatch, setStopWatch] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Começa o jogo
  const handleGameStart = () => {
    if (gameStarted)
      setGameStarted(false);
    else
      setGameStarted(true);
  }

  // termina jogo
  const handleGameOver = () => {
    if (gameOver) {
      setGameOver(false);
      clearInterval(timerID);
      setStopWatch(0);
    }
    else {
      setGameStarted(false);
      setGameOver(true);
    }
  }

  // Seleciona o nivel 
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setLevel(value);
    
    switch (value) {
      case "1":
        setNumMines(LEVELS.Basico.mines);
        break;

      case "2":
        setNumMines(LEVELS.Intermedio.mines);    
        break;

      case "3":
        setNumMines(LEVELS.Avancado.mines);
        break;

      default:
        setNumMines(0);
    }
  }

  // Cronometro inicia no gameStarted
  useEffect(() => {
  if (gameStarted) {
    timerID = setInterval(() => {
      setStopWatch(prev => prev + 1);
    }, 1000);
  }

  return () => {
    clearInterval(timerID);
  };
}, [gameStarted]);

  return (
    <div className="App" id="container">
      <Header />
      <main className='main-content'>
        <ControlPanel
          gameStarted={gameStarted}
          level={level}
          onGameStart={handleGameStart}
          onLevelChange={handleLevelChange}
          stopWatch={stopWatch}
        />
        <GamePanel
          gameStarted={gameStarted}
          level={level}
          numMines={numMines}
          setNumMines={setNumMines}
          gameOver={gameOver}
          onGameOver={handleGameOver}
        />
        <GameOverModal
          isOpen={gameOver}
          stopWatch={stopWatch}
          minesLeft={numMines}
          handleClose={handleGameOver}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;