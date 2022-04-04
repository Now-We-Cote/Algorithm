// 10부제

// 답안

function solution(arr, num) {
  return arr.filter((e) => e % 10 === num).length;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
let num = 3;

console.log(solution(arr, num)); // 3

// 선생님 답안

function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr)); // 3
