{
  const solution = (n, variation, money) => {
    let answer = Number.MAX_SAFE_INTEGER;

    const DFS = (level, sum) => {
      if (sum > money) return;
      if (sum === money) {
        // 아... 15원으로 딱떨어지는 법은 없음.. 16으로 떨어진 경우...무한정 내려간다
        answer = Math.min(level, answer);
      } else {
        for (let i = 0; i < n; i++) {
          DFS(level + 1, sum + variation[i]);
        }
      }
    };
    DFS(0, 0);
    return answer;
  };

  const n = 3;
  const variation = [1, 2, 5];
  const money = 15;

  solution(n, variation, money);
}
