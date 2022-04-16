// 격자판 최대합

// 문제 - 5*5 격자판에 아래와 같이 숫자가 적혀있습니다.
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을
// 출력합니다.

// 입력 - 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

// 출력 - 최대합을 출력합니다.

let array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

{
  const solution = (N, numbers) => {
    rows = [];
    columns = [];
    crose = 0;
    reverseCrose = 0;

    numbers.forEach((row, idx) => {
      rows.push(row.reduce((a, b) => a + b));

      const columnArray = numbers.map((item) => item[idx]);
      columns.push(columnArray.reduce((a, b) => a + b));

      crose += row[idx];

      reverseCrose += row[N - idx - 1];
    });

    return Math.max(...rows, ...columns, crose, reverseCrose);
  };
}
