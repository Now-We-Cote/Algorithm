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

// 선생님 답안
const solution = (m, arr) => {
  let answer = [];
  const n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (v) => {
    if (v === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i <= n; i++) {
        // 만약 ch[i]을 쓰지 않았다면(1이 아니라 0 이라면)
        if (ch[i] === 0) {
          ch[i] = 1; // ch[i]을 썼다고 1로 체크해줌
          tmp[v] = arr[i];
          DFS(v + 1);
          ch[i] = 0; // ch[i] 부분 1이었던 것 0으로 교체
        }
      }
    }
  };
  DFS(0);
  return [answer, answer.length];
};
let arr = [3, 6, 9];
solution(2, arr);
