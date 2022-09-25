{
  /** DFS 넘길 때 해당 정점이 출발 정점이 맞는지 check할 것
   * - 안그러면 맨 처음부터 돌아요  (회귀가능성이 있습니다)
   * - 그래서 check 배열이 필요합니다
   *
   * - 정점 갯수만큼 for문을 돌려서 뻗히게 합니다
   * - 그리고 5에 도착하는 경우 break하고, check 배열에서 체크를 풀어준다
   * */

  const solution = (n, arr) => {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 1번 인덱스부터 써서 n+1길이로 잡음
    let chk = Array.from({ length: n + 1 }, () => 0);
    let path = []; // debugging

    // 인접행렬 만들기
    for (let [a, b] of arr) {
      // 이렇게 하면 2차원 배열 내 인자를 풀어서 받을 수 있음
      // 방향그래프여서 a => b로 진행
      graph[a][b] = 1;
    }

    function DFS(v) {
      if (v === n) {
        answer++;
        console.log(path);
      } else {
        for (let i = 1; i <= n; i++) {
          // 노드번호여서 1부터
          // v라는 정점에서 i라는 정점으로 이동 가능한가 + 미방문한 곳인가
          if (graph[v][i] === 1 && chk[i] === 0) {
            chk[i] = 1; // DFS 들어가기 전에 체크
            path.push(i);
            DFS(i);
            chk[i] = 0; // 나오는 순간 체크 풀기
            path.pop();
          }
        }
      }
    }
    path.push(1);
    chk[1] = 1; // 1에 대한 중복방문 방지
    DFS(1);

    return answer;
  };

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
}
