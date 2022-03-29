// 삼각형 판별하기

// 답안

function solution(a, b, c) {
  let answer, totalNum;
  let maxNum = a;
  let toatalNum = a + b + c;

  if (a > b) {
    maxNum = a;
  } else {
    maxNum = b;
  }
  if (maxNum > c) {
    maxNum = c;
  }

  let restNum = totalNum - maxNum;
  if (restNum > maxNum) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}

console.log(solution(1, 7, 4)); // NO
