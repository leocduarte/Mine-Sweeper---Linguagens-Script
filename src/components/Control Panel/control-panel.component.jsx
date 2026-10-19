import React from "react";
import "./control-panel.css";

function ControlPanel({ gameStarted, onGameStart, level, onLevelChange, stopWatch }) {  
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  return (
    <section id="panel-control">
      <h3 className="sr-only">Escolha do Nível</h3>
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            value={level}
            onChange={onLevelChange}
            disabled={gameStarted}
          >
            <option value="0">Selecione...</option>
            <option value="1">Básico (9x9 - 10 minas)</option>
            <option value="2">Intermédio (16x16 - 40 minas)</option>
            <option value="3">Avançado (30x16 - 99 minas)</option>
          </select>
        </fieldset>
        <button
          type="button"
          id="btPlay"
          disabled={level === "0" || gameStarted}
          onClick={onGameStart}
        >
          Iniciar Jogo
        </button>
      </form>
      <div className="form-metadata">
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{stopWatch}</dd>
        </dl>
      </div>
    </section>
  );
}

export default ControlPanel;
