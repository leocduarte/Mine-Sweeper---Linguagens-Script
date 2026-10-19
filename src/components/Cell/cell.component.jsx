import React from 'react';
import { CELL_FLAG, CELL_VALUES, EMOTES } from '../../constants'
import './cell.css';

const Cell = ({ cellValue, onLeftClick, onRightClick }) => {
    const handleLeftClick = () => onLeftClick(cellValue.x, cellValue.y); // Executa a função onLeftClick

    const handleRightClick = (event) => {
        event.preventDefault();       // Desativa o menu de contexto
        onRightClick(cellValue.x, cellValue.y); // Executa a função onRightClick
    };

    const cellContent = () => {
        if (cellValue.revealed) {
          if (cellValue.value === CELL_VALUES.EXPLOSION) return EMOTES.EXPLOSION;

          if (cellValue.value === CELL_VALUES.MINE) {
            if (cellValue.flag === CELL_FLAG.FLAG) return EMOTES.FLAG;
            else return EMOTES.MINE;
          }

          return cellValue.value || '';
        }

        if (cellValue.flag === CELL_FLAG.FLAG) return EMOTES.FLAG;
        if (cellValue.flag === CELL_FLAG.QUESTION) return EMOTES.QUESTION;

    };

    const cellClass = cellValue.flag === CELL_FLAG.FLAG
        ? 'flag'
        : cellValue.flag === CELL_FLAG.QUESTION
        ? 'question'
        : cellValue.revealed
        ? 'revealed'
        : '';

    return (
        <div className="cell">
            <button
                onClick={handleLeftClick}
                onContextMenu={handleRightClick}
                className={cellClass}
                id={cellValue.value > CELL_VALUES.EMPTY ? 'value'+cellValue.value : ''}
            >
                <span className="emoji">{cellContent()}</span>
            </button>
        </div>
    );
};

export default Cell;