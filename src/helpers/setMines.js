import { CELL_VALUES } from '../constants';

function setMines(grid, numberOfMines) {
  let mines = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  });

  while (mines < numberOfMines) {
    const { x, y } = getRandomPosition();

    if (grid[x][y].value !== CELL_VALUES.MINE) {
      grid[x][y].value = CELL_VALUES.MINE;
      mines++;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newX = x + i;
          const newY = y + j;

          if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
            if (grid[newX][newY].value !== CELL_VALUES.MINE) {
              grid[newX][newY].value++;
            }
          }
        }
      }
    }
  }
}

export default setMines;
