{
  const solution = (weight, arr) => {
    let answer = 0;
    let n = arr.length;
    const DFS = (v, sum) => {
      if (sum > weight) return;
      if (v === n) {
        answer = Math.max(answer, sum);
      } else {
        DFS(v + 1, sum + arr[v]);
        DFS(v + 1, sum);
      }
    };
    DFS(0, 0);
    return answer;
  };

  const arr = [81, 58, 42, 33, 61];
  solution(259, arr);
}
