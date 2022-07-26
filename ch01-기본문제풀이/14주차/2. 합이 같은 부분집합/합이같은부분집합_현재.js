{
  const getTotal = (arr) => {
    return arr.reduce((a, b) => a + b);
  };

  const solution = (arr) => {
    let answer = "NO";
    const chk = [];
    const DFS = (n) => {
      if (n === arr.length) {
        // 다 돌았을 때 chk에 있는게 반 이상인 경우
        if (chk.length !== 0 && getTotal(chk) === getTotal(arr) / 2) {
          answer = "YES";
          return;
        }
      } else {
        // 더하는 경우
        chk.push(arr[n]);
        DFS(n + 1);
        // 빼는 경우
        chk.pop();
        DFS(n + 1);
      }
    };
    DFS(1);
    return answer;
  };

  const arr = [1, 3, 5, 6, 7, 10];
  solution(arr);
}
