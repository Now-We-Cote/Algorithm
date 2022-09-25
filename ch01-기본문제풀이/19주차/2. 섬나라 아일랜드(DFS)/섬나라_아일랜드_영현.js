// 섬나라 아일랜드

// 답안
const solution = (board) => {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const DFS = (x, y) => {
    board[x][y] = 0; // 방문했기 때문에 0으로 바꿔야 함
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      // board 밖으로 나가지 않고 가려는 곳이 1 즉, 섬일 때
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    // board 2차원 배열 탐색
    for (let j = 0; j < n; j++) {
      // 탐색 중 섬 발견
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
};

const arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
solution(arr);
