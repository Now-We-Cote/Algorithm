{
  /** BFS : 상태 트리
   * 상태트리 - 특정 노드(상태)를 출발점으로 해서 어떤 도착지점으로 가는데 , 도착거리로 가는 "최단 거리"가 어디냐 를 구할 때 BFS 상태트리를 만들어가며 레벨 탐색을 한다 - 최단 거리를 구하는 방법론
   *
   * 출발지에서 한번만에 갈 수 있는 곳에 도착지가 있는가 모두 check
   * 아니라면 다음 레벨에서 원하는 도착지인지 모두 check
   */

  // 이진 탐색 증명
  // 트리니까 아래 래벨은 2n, 2n+1로 뻗도록 설정
  const solution = () => {
    let answer = "";
    let queue = [];
    queue.push(1);
    while (queue.length) {
      let v = queue.shift(); // 맨 첫번째 노드
      answer += v + " "; // string으로 나열되게 한다
      for (let nv of [v * 2, v * 2 + 1]) {
        //  아래로 뻗을 노드 만들어준디.
        // 멈출 기준점을 만들어준다 - 여기서는 7 초과는 없도록 한다
        if (nv > 7) continue;
        queue.push(nv);
      }
    }
    return answer;
  };
}

{
  // 송아지 찾기 문제
  const solution = (s, e) => {
    let ch = Array.from({ length: 10001 }, () => 0); // 1부터 10000까지
    let dis = Array.from({ length: 10001 }, () => 0); // depth(level)을 기록하는 배열
    let queue = [];
    // 시작점에는 init
    ch[s] = 1;
    queue.push(s);
    dis[s] = 0; // level은 0으로 둔다

    // queue 순회
    while (queue.length) {
      let x = queue.shift(); // 첫 출발좌표
      for (let nx of [x - 1, x + 1, x + 5]) {
        // 가닥 뻗으면서 확인
        if (nx === e) return dis[x] + 1; // 소 찾으면 종료 하고 depth를 반환
        if (nx > 0 && nx < 10000 && ch[nx] === 0) {
          // 이미 갔던 경로도 아니고, 범위 내에 있는 좌표일 것
          ch[nx] = 1;
          queue.push(nx);
          dis[nx] = dis[x] + 1; // 지나친 경로의 depth를 기록한다
        }
      }
    }
  };
}
