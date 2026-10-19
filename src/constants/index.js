export const CELL_SIZE = 2;

export const LEVELS = {
  Basico: {
    rows: 9,
    cols: 9,
    mines: 10,
  },
  Intermedio: {
    rows: 16,
    cols: 16,
    mines: 40,
  },
  Avancado: {
    rows: 16,
    cols: 30,
    mines: 99,
  },
};

export const CELL_VALUES = {
  EMPTY: 0,
  MINE: -1,
  EXPLOSION: -2,
};

export const CELL_FLAG = {
  NOTHING: 0,
  FLAG: 1,
  QUESTION: 2,
};

export const EMOTES = {
  FLAG: "🚩",
  QUESTION: "❓",
  MINE: "💣",
  EXPLOSION: "💥",
};
