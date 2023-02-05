// 재귀함수와 스택프레임

// 풀이
const solution = (n) => {
  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(L - 1); //자기 자신을 호출하는 것이 재귀
      console.log(L);
    }
  };
  DFS(n);
};

solution(3);
