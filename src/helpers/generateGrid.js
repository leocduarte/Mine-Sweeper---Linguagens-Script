import { CELL_VALUES, CELL_FLAG } from '../constants';

function generateGrid(rows, cols) {
  const grid = [];

  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push({
        value: CELL_VALUES.EMPTY,
        revealed: false,
        flag: CELL_FLAG.NOTHING,
        x: row,
        y: col
      });
    }
    grid.push(currentRow);
  };

  return grid;
}

export default generateGrid;
