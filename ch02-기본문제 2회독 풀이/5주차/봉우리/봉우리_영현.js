// 봉우리

// 답안
function solution(arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0]; // x방향 상우하좌
  let dy = [0, 1, 0, -1]; // y방향 상우하좌

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = 1;

      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 가려고 하는 행 좌표
        let ny = j + dy[k]; // 가려고 하는 열 좌표

        if (nx >= 0 && ny >= 0 && nx < arr.length && arr[nx][ny] >= arr[i][j]) {
          // 그리고 또한 배열 인덱스보다 크면 배열 바깥으로 나가버리니 X
          //nx, ny는 arr[i][j]의 상우하좌를 돈다. 이들이 더 크면 봉우리가 아니다
          flag = 0;
          break;
        }
      }
      if (flag === 1) answer++; // 봉우리이기 때문에 +1
    }
  }
  return answer;
}
const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
solution(arr);
