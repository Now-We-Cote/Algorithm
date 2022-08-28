// 수열 추측하기

// 답안
const solution = (n, r) => {
  let answer;
  let flag;

  // N이 10까지라고 했으니까 11로 설정
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  // 체크 배열
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 완성된 순열
  let p = Array.from({ length: n }, () => 0);
  // 곱해줄 배열 만들기 -> 4라면 1331
  let b = Array.from({ length: n }, () => 0);

  const combi = (n, r) => {
    // dy배열에 저장해둔 값이 있으면
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
  };

  // 순열 구하기 -> sum은 final값
  const DFS = (L, sum) => {
    if (flag) return;
    // 순열이 완성되고 sum이 r일 때
    if (L === n && sum === r) {
      answer = p.slice();
      flag = 1;
    } else {
      // 1부터 n까지 순열 만들기
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
};
solution(4, 16);
