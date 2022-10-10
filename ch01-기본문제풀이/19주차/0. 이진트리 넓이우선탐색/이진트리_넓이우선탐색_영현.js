// 이진트리 넚이우선탐색
// BFS는 상태트리를 레벨 탐색하는 것이고 최단 거리를 구하는 방법론임

// 답안
const solution = () => {
  let answer = "";
  // 큐도 배열로 진행
  let queue = [];
  // 첫번째 노드인 1을 넣어줌
  queue.push(1);

  // 큐가 비어지게 될때까지
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;

      queue.push(nv);
    }
  }

  return answer;
};

console.log(solution());
