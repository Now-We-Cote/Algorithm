{
  const solution = (board, moves) => {
    const stack = [];
    let count = 0;

    for (let move of moves) {
      for (let row = 0; row < board.length; row++) {
        let item = board[row][move - 1];
        if (item) {
          stack.push(item);
          board[row][move - 1] = 0; // 빼준 것은 비었다고 표시한다
          break;
        }
      }
      if (stack[stack.length - 2] === stack[stack.length - 1]) {
        stack.pop();
        stack.pop();
        count += 2;
      }
    }
    return count;
  };

  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];

  const moves = [1, 5, 3, 5, 1, 2, 1, 4];

  solution(board, moves);
}
