// 조합 구하기

// 문제 - 1부터 N까지 번호가 적힌 구슬이있습니다.
// 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

// 출력 - 첫 번째 줄에 결과를 출력합니다.
// 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

// 입력 예시 - 4, 2

// 출력 예시 - 12 13 14 23 24 34 6

{
  const solution = (N, M) => {
    let count = 0;
    const result = [];
    const visit = new Array(M).fill(0);

    const DFS = (level, prev) => {
      if (level === M) {
        result.push(visit.slice());
        count++;
      } else {
        for (let i = prev; i <= N; i++) {
          visit[level] = i;
          DFS(level + 1, i + 1);
        }
      }
    };
    DFS(0, 1);
    return [result, count];
  };
}
