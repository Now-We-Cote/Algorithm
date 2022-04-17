{
  const solution = (arr) => {
    // n차원 배열은 n번 풀어내면 된다 결국
    // 이중 for문을 써도 이 것 안에서 여러가지 값을 얻어낼 수 있다면 나쁜 코드는 아니다
    // 각 행의 합 case
    // [0][1], [0][2], [0][3]
    let row = new Array(arr.length).fill(0);
    // 각 열의 합 case
    //[0][0], [1][0], [2][0]
    let col = new Array(arr.length).fill(0);
    // 대각선 case 왼쪽 / 오른쪽
    let cross = 0;
    let reverseCross = 0;
    // [0][0], [1][1], [2][2]
    // i와 j가 같아야한다
    for (let i = 0; i < arr.length; i++) {
      // arr 1줄
      for (let j = 0; j < arr.length; j++) {
        // arr 1줄 내 요소들
        if (i === j) {
          cross += arr[i][j];
          reverseCross += arr[i][arr.length - i - 1]; // 역순
        }
        row[i] += arr[i][j];
        col[i] += arr[j][i];
      }
    }
    return Math.max(...row, ...col, cross, reverseCross);
  };

  const arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [10, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];

  solution(arr);
}
