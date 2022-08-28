// 조합 구하기

// 답안
const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L, s) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      // i는 1,2,3,4 로 뻗어나감
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 1);

  return answer;
};
solution(4, 2);
