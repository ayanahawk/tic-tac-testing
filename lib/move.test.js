const readlineSync = require('readline-sync');
const { validateMove, getValidMoveFromPlayer } = require('./move');

describe('validateMove', () => {
  it('should make sure input is proper format', () => {
    const input = '1, 0';
    const incorrect = '0, 1';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(validateMove(input, board)).toStrictEqual([1, 0]);
    try {
      expect(validateMove(incorrect, board));
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  it('should make the', () => {
    const input = '1, 0';
    const incorrect = '0';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(validateMove(input, board)).toStrictEqual([1, 0]);
    try {
      expect(validateMove(incorrect, board));
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});
