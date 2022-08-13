// 조합의 경우수(메모이제이션)

// 문제 - 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.

// 입력 - 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.

// 출력 - 첫째 줄에 조합수를 출력합니다.

// 입력 예시1 - 5, 3

// 출력 예시1 - 10

// 입력 예시2 - 33, 19

// 출력 예시2 - 818809200

{
  const solution = (n, r) => {
    let result = 0;
    let memo = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    const DFS = (n, r) => {
      if (memo[n][r]) {
        return memo[n][r];
      }

      if (n === r || r === 0) {
        return 1;
      } else {
        return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
      }
    };

    result = DFS(n, r);
    return result;
  };
}
