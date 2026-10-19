import { CELL_FLAG, CELL_VALUES } from '../constants';

function revealCell(grid, x, y) {
  if (grid[x][y].revealed || grid[x][y].flag !== CELL_FLAG.NOTHING) {
    return grid;
  }

  let updatedGrid = [...grid];
  updatedGrid[x][y] = { ...updatedGrid[x][y], revealed: true };

  if (updatedGrid[x][y].value === CELL_VALUES.EMPTY) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newX = x + i;
        const newY = y + j;

        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
          updatedGrid = revealCell(updatedGrid, newX, newY);
        }
      }
    }
  }

  return updatedGrid;
}

export default revealCell;
