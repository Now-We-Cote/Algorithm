{
  /** 재귀가 몇번 일어나느냐가 포인트 = 갯수 */
  const solution = (board) => {
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1]; // dx, dy 8개로 뻗는 경우의 수 - 시계방향으로 잡음

    const DFS = (x, y) => {
      board[x][y] = 0; // 발견한 지점은 초기화
      for (let k = 0; k < 8; k++) {
        let nx = x + dx[k]; // 8방향 경우의 수 탐색
        let ny = y + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
          // nx, ny는 board의 영역을 넘으면 안되기에 0보다 크고 n보다는 작아야한다
          DFS(nx, ny);
        }
      }
    };

    // 이중배열이니까 이중포문
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 1) {
          // 섬 발견
          answer++; // 섬 발견했으니 추가
          DFS(i, j); // 섬 발견했으니 재귀
        }
      }
    }

    return answer;
  };
}
