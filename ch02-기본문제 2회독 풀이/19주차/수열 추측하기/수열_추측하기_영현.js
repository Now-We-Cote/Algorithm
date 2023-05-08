// 수열 추측하기

// 풀이
const solution = (n, f) => {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); //N이 최대 10까지라고 했기 때문에
  let ch = Array.from({ length: n + 1 }, () => 0); //체크 배열
  let p = Array.from({ length: n }, () => 0); //순열 저장
  let b = Array.from({ length: n }, () => 0); //1331 처럼 조합값을 저장

  // 조합값을 구하는 함수
  const combi = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r]; //2차원 배열에 입력했던 값이 있다면
    if (n === r || r === 0) return 1;
    else {
      return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    } //2차원에 배열에 값을 입력해둠
  };

  const DFS = (L, sum) => {
    if (flag) return;

    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
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
