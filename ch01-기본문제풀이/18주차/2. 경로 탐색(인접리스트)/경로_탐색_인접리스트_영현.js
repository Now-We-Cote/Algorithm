// 경로탐색 (인접리스트)

// 답안
const solution = (n, arr) => {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array()); // 인접리스트를 만들시에는 0으로 초기화할 필요가 없음. 행은 n+1개 만큼 필요함.(1번부터 n번까지의 정점번호를 가지고 있어야하기 때문)
  const ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열(방문했나 안했나 확인)

  for (let [a, b] of arr) {
    graph[a].push(b); // a행에 b push -> 인접리스트 생성
  }

  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      // 인덱스로 확인하기 때문에 0부터 시작 + grpah(인접리스트) 행의 길이로만 확인하면 됨.  1이 넘어오면 3까지
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1; // i라는 정점에 방문함
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  };
  ch[1] = 1;
  DFS(1);

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
