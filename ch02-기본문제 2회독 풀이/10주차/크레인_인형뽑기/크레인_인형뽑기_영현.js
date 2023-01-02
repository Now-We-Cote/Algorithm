// 크레인 인형 뽑기

// 답안
const solution = (board, moves) => {
  const newBoard = [];
  const basket = [];
  let answer = 0;
  for (let i = 0; i < board[0].length; i++) {
    const columVal = [];
    // 열을 돌면서 행 방향에 있는 0을 제외한 나머지 숫자로 배열 재생성
    for (let j = board[0].length - 1; j >= 0; j--) {
      board[j][i] !== 0 && columVal.push(board[j][i]);
    }
    newBoard.push(columVal);
  }

  moves.forEach((moveNum) => {
    if (basket[basket.length - 1] === newBoard[moveNum - 1][0]) {
      newBoard[moveNum - 1].pop();
      basket.pop();
      answer += 2;
    } else {
      basket.push(newBoard[moveNum - 1].pop());
    }
  });
  return answer;
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
