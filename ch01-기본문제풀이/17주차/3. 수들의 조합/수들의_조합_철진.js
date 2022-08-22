// 수들의 조합

// 문제 - N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수는
// 몇 개가 있는지 출력하는 프로그램을 작성하세요.
// 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고, 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면
// 4+8+12 2+4+12로 2가지가 있습니다.

// 입력 - 첫줄에 정수의 개수 N(3<=N<=20)과 임의의 정수 K(2<=K<=N)가 주어지고,
// 두 번째 줄에는 N개의 정수가 주어진다.
// 세 번째 줄에 M이 주어집니다.

// 출력 - 총 가지수를 출력합니다.

// 입력 예시 - 5, 3, [2, 4, 5, 8, 12], 6

// 출력 예시 - 2

{
  const solution = (N, K, numbers, M) => {
    let count = 0;
    const visit = new Array(K).fill(0);

    const DFS = (level, prev, sum) => {
      if (level === K && sum % M === 0) {
        count++;
      }

      if (level === K) {
        return;
      } else {
        for (let i = prev; i < N; i++) {
          visit[level] = numbers[i];
          DFS(level + 1, i + 1, sum + numbers[i]);
        }
      }
    };
    DFS(0, 0, 0);
    return count;
  };
}
