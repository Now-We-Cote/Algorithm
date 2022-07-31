// 최대점수 구하기(DFS)

// 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
// 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩 니다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
// (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

// 입력 - 첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다.
// 두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

// 출력 - 첫 번째 줄에 제한 시간 안에 얻을 수 있는 최대 점수를 출력합니다.

// 입력 예시 - 5, 20, [[10, 5], [25, 12], [15, 8], [6,3], [7,4]]

// 출력 예시 - 41

{
  const solution = (N, M, problems) => {
    let result = 0;
    let time = 0;

    const DFS = (level, sum, time) => {
      if (time > M) {
        return;
      }

      if (level === N) {
        result = Math.max(result, sum);
      } else {
        DFS(level + 1, sum + problems[level][0], time + problems[level][1]);
        DFS(level + 1, sum, time);
      }
    };
    DFS(0, 0, 0);
    return result;
  };
}
