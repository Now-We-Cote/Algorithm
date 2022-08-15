// 순열 구하기

// 답안
const solution = (n, arr) => {
  let answer = [];
  let tmp = Array.from({ length: n }, () => 0);
  const DFS = (v) => {
    if (v === n) {
      if (tmp[0] === tmp[1]) return;
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i <= n; i++) {
        tmp[v] = arr[i];
        DFS(v + 1);
      }
    }
  };
  DFS(0);
  return [answer, answer.length];
};
let arr = [3, 6, 9];
solution(2, arr);
