// 결혼식

// 답안
const solution = (arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let time = [];

  for (let x of arr) {
    time.push([x[0], "s"]);
    time.push([x[1], "e"]);
  }
  time.sort((a, b) => {
    //아스 넘버로 바꿔줌 (e가 s보다 앞)
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;

  for (let x of time) {
    //입장하는 사람이라면 cnt를 ++
    if (x[1] === "s") cnt++;
    else cnt--; //나가면 --
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
