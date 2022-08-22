// 수열 추측하기

// 문제 - 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
// 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.

// 3 1 2 4
//  4 3 6
//   7 9
//   16

// N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오.
// 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

// 입력 - 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의 미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

// 출력 - 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재 하지 않는 경우는 입력으로 주어지지 않는다.

// 입력 예시 - 4, 16

// 출력 예시 - [3, 1, 2, 4]

{
  const solution = (n, f) => {
    const memo = Array.from(Array(11), () => Array(11).fill(0));
    const visited = new Array(n + 1).fill(0);
    const numbers = new Array(n).fill(0);
    const combis = new Array(n).fill(0);
    let result;

    const combi = (n, r) => {
      if (memo[n][r]) {
        return memo[n][r];
      }

      if (n === r || r === 0) {
        return 1;
      } else {
        return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
      }
    };

    for (let i = 0; i < n; i++) {
      combis[i] = combi(n - 1, i);
    }

    let end = false;

    const DFS = (level, sum) => {
      if (end) {
        return;
      }

      if (level === n && sum === f) {
        result = numbers.slice();
        end = true;
      } else {
        for (let j = 1; j <= n; j++) {
          if (visited[j] === 0) {
            visited[j] = 1;
            numbers[level] = j;
            DFS(level + 1, sum + numbers[level] * combis[level]);
            visited[j] = 0;
          }
        }
      }
    };

    DFS(0, 0);
    return result;
  };
}
