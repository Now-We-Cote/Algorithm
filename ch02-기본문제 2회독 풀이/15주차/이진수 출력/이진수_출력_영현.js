// 이진수 출력

// 풀이
const solution = (n) => {
  let answer = "";

  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(Math.floor(L / 2));
      const rest = L % 2;
      answer += rest;
    }
  };
  DFS(n);

  return answer;
};

solution(11);
