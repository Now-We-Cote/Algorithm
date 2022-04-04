// 일곱난쟁이

// 답안

function solution(arr) {
  let total = arr.reduce((a, b) => a + b);
  let answer;
  arr.forEach(function (d, i) {
    for (let i = 0; i < arr.length; i++) {
      let num = total - (d + arr[i]);
    }
  });

  return total;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr)); // 실패 선생님 설명을 듣기로..

// 선생님 답안

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr)); // [ 20, 7, 23, 19, 10, 8, 13 ]
