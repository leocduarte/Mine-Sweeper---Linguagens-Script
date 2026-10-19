import React, { useState, useEffect } from "react";
import { CELL_FLAG, CELL_VALUES, LEVELS } from '../../constants';
import { generateGrid, clearGird, setMines, revealCell } from '../../helpers';
import { Cell } from "../";
import './game-panel.css'

let levelSetting;

const GamePanel = ({ gameStarted, level, numMines, setNumMines, gameOver, onGameOver }) => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        switch (level) {
            case '1':
                levelSetting = LEVELS.Basico;
                break;

            case '2':
                levelSetting = LEVELS.Intermedio;
                break;

            case '3':
                levelSetting = LEVELS.Avancado;
                break;

            default:
                levelSetting = null;
                break;
        }
    
        let newGrid = [];

        if (levelSetting !== null)
            newGrid = generateGrid(levelSetting.rows, levelSetting.cols);

        setBoard(newGrid)
    }, [level]);
    
    useEffect(() => {
        if (gameStarted) {
            const newGrid = clearGird(board);
            setMines(newGrid, levelSetting.mines);
            setNumMines(levelSetting.mines);
            setBoard(newGrid);
        }
    }, [gameStarted]);
    
    useEffect(() => {
        if (gameOver) {
            const newGrid = board.map(row =>
                row.map(cell => ({
                    ...cell,
                    revealed: cell.value === CELL_VALUES.MINE ? true : cell.revealed
                }))
            );
            setBoard(newGrid);
        }
    }, [gameOver]);
    

    // Revelar celula com right click
    const reveal = (x, y) => {
        if (!gameStarted || board[x][y].revealed || board[x][y].flag === CELL_FLAG.FLAG) return;
    
        const newGrid = revealCell(board, x, y);
        if (newGrid[x][y].value === CELL_VALUES.MINE) {
          onGameOver(true);
          newGrid[x][y].value = CELL_VALUES.EXPLOSION;
        } else {
          const allNonMineRevealed = newGrid.every(row =>
            row.every(cell => cell.value === CELL_VALUES.MINE || cell.revealed)
          );
          if (allNonMineRevealed) onGameOver(true);
        }
        setBoard(newGrid);
    };

    // Mudar o estado da celula com left click
    const updateFlagCell = (x, y) => {
        if (!gameStarted || board[x][y].revealed) return;
    
        const newGrid = [...board];
        const cell = newGrid[x][y];
    
        switch (cell.flag) {
          case CELL_FLAG.NOTHING:
            cell.flag = CELL_FLAG.FLAG;
            if (cell.value === CELL_VALUES.MINE) setNumMines(numMines - 1);
            break;
          case CELL_FLAG.FLAG:
            if (cell.value === CELL_VALUES.MINE) setNumMines(numMines + 1);
            cell.flag = CELL_FLAG.QUESTION;
            break;
          case CELL_FLAG.QUESTION:
            cell.flag = CELL_FLAG.NOTHING;
            break;
          default:
            break;
        }
        setBoard(newGrid);
    };

    const gameClass =
        level === '1' ? ''
        : level === '2' ? 'intermedio'
        : level === '3' ? 'avancado'
        : '';

    return (
        <section className="game-panel">
            <div id="game" className={`${gameClass}`}>
                {board.map((gridRow, i) =>
                    gridRow.map((cell, k) => 
                        <Cell
                            key={`${i}-${k}`}
                            cellValue={cell}
                            onLeftClick={reveal}
                            onRightClick={updateFlagCell}
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default GamePanel;