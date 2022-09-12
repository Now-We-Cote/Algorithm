{
  /** 인접 행렬로 푸는건 정점이 적을 때 유리
   * 허나 정점의 양이 많아지면 불리
   *
   * 인접 리스트는 무엇인가? 이차원 행렬 내부에다가 '값'으로 간선정보를 넣어놓는 것
   */

  const solution = (n, arr) => {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array()); // 인접 리스트이기 때문에 0으로 채워주지 않고 undefined로 둔다. 그래야 간선이 있는 곳 까지만 length를 잡아 for문을 돌려 DFS를 사용할 수 있기 때문
    let chk = Array.from({ length: n + 1 }, () => 0);
    let path = []; // debugging

    // 인접리스트 만들기
    for (let [a, b] of arr) {
      // 이렇게 하면 2차원 배열 내 인자를 풀어서 받을 수 있음
      // 방향그래프여서 a => b로 진행
      graph[a].push(b);
    }

    function DFS(v) {
      if (v === n) {
        answer++;
        console.log(path);
      } else {
        for (let i = 0; i < graph[v].length; i++) {
          if (chk[graph[v][i]] === 0) {
            // graph[v][i]는 정점 위치
            chk[graph[v][i]] = 1; // DFS 들어가기 전에 체크
            path.push(graph[v][i]);
            DFS(graph[v][i]); // 정점을 넘겨준다
            chk[graph[v][i]] = 0; // 나오는 순간 체크 풀기
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
