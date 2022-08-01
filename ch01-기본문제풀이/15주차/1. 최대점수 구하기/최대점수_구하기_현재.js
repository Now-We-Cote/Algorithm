{
  // 제한시간 M 안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야함
  // 이진트리의 부분집합 스타일
  // 문제의 수가 많아지면 완전탐색으로는 어려움
  const solution = (count, minute, problems) => {
    let answer = 0;
    const DFS = (level, sum, time) => {
      // 시간이 20 넘어가면 안되기 때문에 time도 넘겨야함
      if (time > minute) return; // 시간 넘어가면 무효
      if (level === count) {
        // 순회의 종착점
        answer = Math.max(answer, sum); // 기존 answer와 sum 중 큰 값을 대입한다
        return;
      } else {
        // 풀지 안풀지를 정한다
        // 푸는 경우 sum, time을 추가해준다
        DFS(level + 1, sum + problems[level][0], time + problems[level][1]);
        // 넘어가는 경우, 다음 문제로 넘겨준다
        DFS(level + 1, sum, time);
      }
    };
    DFS(0, 0, 0);
    return answer;
  };

  const count = 5;
  const minute = 20;
  const problems = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ];

  solution(count, minute, problems);
}
