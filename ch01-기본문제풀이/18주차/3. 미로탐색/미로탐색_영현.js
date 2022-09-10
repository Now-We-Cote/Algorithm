// 미로탐색

// 답안
const solution = (arr) => {
  let answer = 0;
  // x쪽으로 가는 위치 값
  const dx = [-1, 0, 1, 0];
  // y쪽으로 가는 위치 값
  const dy = [0, 1, 0, -1];

  const DFS = (x, y) => {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        // 미로 밖으로 나가지 않고(경계선 처리), 가려는 지점이 0일 때
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  };
  arr[0][0] = 1;

  DFS(0, 0);
  return answer;
};

const arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
