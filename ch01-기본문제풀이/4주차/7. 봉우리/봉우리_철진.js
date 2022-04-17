// 봉우리

// 입력 - 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.

// 출력 - 봉우리의 개수를 출력하세요.

// 입력 예시 - 5
// 53723 37161 72534 43641 87352

// 출력 예시 - 10

let array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

{
  const solution = (N, heights) => {
    let top = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const up = i - 1 >= 0 ? heights[i - 1][j] : 0;
        const down = i + 1 < N ? heights[i + 1][j] : 0;
        const left = j - 1 >= 0 ? heights[i][j - 1] : 0;
        const right = j + 1 < N ? heights[i][j + 1] : 0;

        if (
          heights[i][j] > up &&
          heights[i][j] > down &&
          heights[i][j] > left &&
          heights[i][j] > right
        ) {
          top++;
        }
      }
    }
    return top;
  };
}
