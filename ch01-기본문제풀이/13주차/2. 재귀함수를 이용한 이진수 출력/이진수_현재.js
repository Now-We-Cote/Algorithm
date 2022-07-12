{
  const solution = (n) => {
    const answer = [];
    const DFS = (l) => {
      if (l === 0) return;
      else {
        DFS(Math.floor(l / 2));
        answer.push(l % 2);
      }
    };
    DFS(n);
    return answer.join("");
  };

  solution(11);
}
