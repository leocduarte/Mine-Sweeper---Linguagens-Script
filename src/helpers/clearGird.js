import { CELL_VALUES, CELL_FLAG } from '../constants';

function clearGird(grid) {
    return grid.map(row => row.map(cell => ({ ...cell,
        value: CELL_VALUES.EMPTY,
        revealed: false,
        flag: CELL_FLAG.NOTHING
    })));
}

export default clearGird;