{
  const solution = (arr) => {
    let answer = 0;
    let timeTable = [];
    for (let time of arr) {
      timeTable.push([time[0], "s"]);
      timeTable.push([time[1], "e"]);
    }

    timeTable.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1].charCodeAt() - b[1].charCodeAt(); // 아스키코드 참고 - 나가는사람 먼저 올려준다
      } else return a[0] - b[0]; // 이건 오름차순
    });
    let cnt = 0;
    for (let x of timeTable) {
      if (x[1] === "s") cnt++;
      else cnt--;
      answer = Math.max(answer, cnt);
    }
    return answer;
  };

  const arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ];

  solution(arr);
}
