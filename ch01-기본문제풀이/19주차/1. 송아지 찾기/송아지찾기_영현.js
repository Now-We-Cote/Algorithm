// 송아지 찾기

// 답안
const solution = (s, e) => {
  let answer = 0;
  const ch = new Array(10001).fill(0); // 체크 배열은 1~10,000
  const dis = new Array(10001).fill(0);

  const queue = [];

  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length) {
    let x = queue.shift(); // 첫 출발 좌표가 빠짐 -> 5
    for (const nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return dis[x] + 1;
      }

      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1; // 체크 배열에 1로 체크
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  return answer;
};

solution(5, 14);
