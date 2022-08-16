{
  const solution = (num) => {
    let answer = 1;
    const DFS = (level, sum) => {
      if (level === num) {
        answer = sum;
      } else {
        DFS(level + 1, sum * (level + 1));
      }
    };
    DFS(1, 1);
    return answer;
  };

  solution(5);
}
