// 섬나라 아일랜드(BFS)

// 문제 - N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다.
// 각 섬은 1로 표시되어 상하좌 우와 대각선으로 연결되어 있으며, 0은 바다입니다.
// 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.
// 두 번째 줄부터 격자판 정보가 주어진다.

// 출력 - 첫 번째 줄에 섬의 개수를 출력한다.

// 입력 예시 - 7 [[1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0 ,0 ,0 ,0, 0], [0, 0, 0 ,1 ,0 ,1 ,1], [1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0, 0]]

// 출력 예시 - 5

{
  const solution = (N, board) => {
    let count = 0;
    const X = [-1, -1, 0, 1, 1, 1, 0, -1];
    const Y = [0, 1, 1, 1, 0, -1, -1, -1];
    const queue = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] === 1) {
          board[i][j] = 0;
          queue.push([i, j]);
          count++;
          while (queue.length) {
            let [x, y] = queue.shift();
            for (let k = 0; k < 8; k++) {
              const nextX = x + X[k];
              const nextY = y + Y[k];
              if (
                nextX >= 0 &&
                nextX < N &&
                nextY >= 0 &&
                nextY < N &&
                board[nextX][nextY] === 1
              ) {
                board[nextX][nextY] = 0;
                queue.push([nextX, nextY]);
              }
            }
          }
        }
      }
    }

    return count;
  };
}
