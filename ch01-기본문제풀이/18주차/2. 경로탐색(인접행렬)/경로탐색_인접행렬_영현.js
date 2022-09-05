// 경로탐색 (인접행렬)

// 답안
const solution = (n, arr) => {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 인접행렬을 만들 2차원 배열 / 행과 열의 개수 n+1로 -> 1번 인덱스부터 사용하기 때문
  const ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열(방문했나 안했나 확인)

  for (let [a, b] of arr) {
    graph[a][b] = 1; // 방향 그래프이기 때문에 [a][b]로 -> a에서 b로 이동하기 때문.
    //graph[a][b]=1; // 무방향 그래프를 만들시에 넣어줌.
  }

  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      // 정점 번호는 1부터 시작이기 때문에 1로 선언
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1; // i라는 정점에 방문함
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };
  ch[1] = 1; // 처음 DFS시작할 때 1번 정점을 체크하지 않으면 8가지의 방법이 나오게 됨.
  DFS(1); // 정점이 1이기 때문에 1로 넘겨줌.

  return answer;
};
// 간선 정보
const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
solution(5, arr);
