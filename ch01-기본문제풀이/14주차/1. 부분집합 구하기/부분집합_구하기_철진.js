// 부분집합 구하기(DFS)

// 문제 - 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.

// 입력 - 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

// 출력 - 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 단 공집합은 출력하지 않습니다.

// 입력 예시 - 3

// 출력 예시 - 123, 12, 13, 1, 23, 2, 3

{
  const solution = (N) => {
    const result = [];
    const visit = new Array(N).fill(0);
    const dfs = (K) => {
      if (K > N) {
        const set = visit.filter((n) => n !== 0);
        if (set.length > 0) {
          result.push(set);
        }
      } else {
        visit[K] = K;
        dfs(K + 1);
        visit[K] = 0;
        dfs(K + 1);
      }
    };
    dfs(1);
    return result;
  };
}
