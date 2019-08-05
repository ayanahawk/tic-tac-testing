const {
  prettifyBoard,
  generateStartingBoard,
  updateBoard,
} = require('./board');

describe('board', () => {
  it('should create board', () => {
    expect(generateStartingBoard(3)).toStrictEqual([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
  });

  it('should bring in a pipe', () => {
    const board = [['X', 'O', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(prettifyBoard(board)).toBe(
      ` X | O | X \n---|---|---\n   |   |   \n---|---|---\n   |   |   `
    );
  });

  it('should maintain white space', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(prettifyBoard(board)).toBe(
      `   |   |   \n---|---|---\n   |   |   \n---|---|---\n   |   |   `
    );
  });

  it('should update the board', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const row = 1;
    const col = 1;
    const player = 'X';

    expect(updateBoard(board, [row, col], player)).toStrictEqual([
      [' ', ' ', ' '],
      [' ', 'X', ' '],
      [' ', ' ', ' '],
    ]);
  });
});
