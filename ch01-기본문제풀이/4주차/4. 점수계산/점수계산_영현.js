// 점수계산

// 답안

function solution(arr) {
  let checkCorrect = 1;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result += checkCorrect;
      checkCorrect += 1;
    } else {
      checkCorrect = 1;
    }
    ``;
  }
  return result;
}

const points = [1, 0, 1, 1, 1, 0, 1, 1]; //10

solution(points);
