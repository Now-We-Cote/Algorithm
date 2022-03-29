// 최솟값 구하기

// 답안

function solution(a, b, c, d, e, f, g) {
  // 제일 최소값 구하기
  return Math.min(a, b, c, d, e, f, g);
}

console.log(solution(5, 3, 7, 11, 1, 15, 17)); // 1

// 배열이었을 때 답안

function solution(arr) {
  // 제일 최소값 구하기
  return Math.min(...arr);
}

let arr = [5, 3, 7, 11, 1, 15, 17];
console.log(solution(arr)); // 1

// 선생님 답안

function solution(arr) {
  // 자바스크립트에서 안전한 최대 정수값을 min으로 선언
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 1, 15, 17];
console.log(solution(arr)); // 1
