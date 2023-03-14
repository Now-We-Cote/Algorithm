// 중복순열

// 풀이
const solution = (n, m) => {
  let arr = [];
  const answer = [];
  const DFS = (L) => {
    if (L === m) {
      answer.push(arr.slice());
      arr.pop();
    } else {
      for (let i = 1; i <= n; i++) {
        arr.push(i);
        DFS(L + 1);
      }
      arr = [];
    }
  };
  DFS(0);
  return answer;
};

solution(3, 2);

// 선생님 풀이
const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return answer;
};

solution(3, 2);
