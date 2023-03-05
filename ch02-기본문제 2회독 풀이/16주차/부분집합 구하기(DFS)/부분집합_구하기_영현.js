// 부분집합 구하기

// 풀이
const solution = (v) => {
  let answer = [];
  let ch = Array.from({ length: v }, () => 0);

  const DFS = (N) => {
    if (N > v) {
      const newArr = ch.reduce((acc, curr, index) => {
        if (curr) {
          acc.push(index);
        }
        return acc;
      }, []);
      if (newArr.length > 0) answer.push(newArr);
    } else {
      ch[N] = 1;
      DFS(N + 1);
      ch[N] = 0;
      DFS(N + 1);
    }
  };
  DFS(1);
  return answer;
};

solution(3);
