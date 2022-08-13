// 순열 구하기

// 문제 - 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

// 입력 - 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

// 출력 - 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

// 입력 예시 - 3, 2, [3, 6, 9]

// 출력 예시 - [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]], 6

{
  const solution = (N, M, numbers) => {
    let count = 0;
    const result = [];
    const visit = new Array(M).fill(0);

    const DFS = (level) => {
      if (level === M) {
        const isDuplicateVisited = new Set(visit).size < M;
        if (isDuplicateVisited) {
          return;
        }

        result.push(visit.slice());
        count++;
      } else {
        for (let i = 0; i < N; i++) {
          visit[level] = numbers[i];
          DFS(level + 1);
        }
      }
    };
    DFS(0);
    return [result, count];
  };
}
