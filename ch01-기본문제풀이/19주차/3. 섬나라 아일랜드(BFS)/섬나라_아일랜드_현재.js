{
  /** 큐에 넣기 전에 check한다
   * 1이 있는 곳만 확인해서 queue에 쌓아준다 -> queue는 탐색 회차 단위로 업데이트됨
   * 탐색해서 없다! 싶으면 pop 하고, 윗줄의 탐색을 진행
   * 만약 queue length = 0이면 while문 종료
   * 다시 1만나면 queue 업데이트
   */

  const solution = (board) => {
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1]; // dx, dy 8개로 뻗는 경우의 수 - 시계방향으로 잡음
    let queue = [];

    // 이중배열이니까 이중포문
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 1) {
          // 섬 발견
          board[i][j] = 0;
          queue.push([i, j]); // 섬 발견했으니까 바로 queue 추가 -> 이 시점에서 queue가 돌기 시작
          answer++; // 섬 발견하면 바로 answer 업데이트
          while (queue.length) {
            // queue가 살아 있는 한
            let [x, y] = queue.shift(); // 첫번째 출발점
            // 뽑아낸 다음엔 8방향을 확인
            for (let k = 0; k < 8; k++) {
              let nx = x + dx[k];
              let ny = y + dy[k];
              // 8방향 탐색 중 1이 있는 곳을 탐색
              if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                board[nx][ny] = 0;
                queue.push([nx, ny]); // 여기서 더 없으면 shift만 계속 하다가 queue가 멈춘다
              }
            }
          }
        }
      }
    }
    return answer;
  };
}
