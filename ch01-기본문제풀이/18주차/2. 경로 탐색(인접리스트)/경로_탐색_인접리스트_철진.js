// 경로 탐색(인접리스트)

// 문제 - 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
// 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 총 6가지입니다.

// 입력 - 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다.
// 그 다음부터 M줄에 걸쳐 연결정보가 주어진다.

// 출력 - 총 가지수를 출력한다.

// 입력 예시 - 5, 9, [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]]

{
  const solution = (N, M, nodes) => {
    let count = 0;
    const graph = Array.from(Array(N + 1), () => Array());
    const visit = new Array(N + 1).fill(0);

    for (const [row, column] of nodes) {
      graph[row].push(column);
    }

    const DFS = (level) => {
      if (level === N) {
        count++;
      } else {
        for (let i = 0; i < graph[level].length; i++) {
          if (visit[graph[level][i]] === 0) {
            visit[graph[level][i]] = 1;
            DFS(graph[level][i]);
            visit[graph[level][i]] = 0;
          }
        }
      }
    };
    visit[1] = 1;
    DFS(1);
    return count;
  };
}
