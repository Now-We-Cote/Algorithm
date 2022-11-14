// 점수 계산

// 답안
function solution(arr) {
  let extraPoints = 0;
  let points = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      extraPoints++;
      points += extraPoints;
    } else {
      extraPoints = 0;
    }
  }
  return points;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
solution(arr);
