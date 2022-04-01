// 홀수

// 답안

function solution(arr) {
  let oddArr = [];
  let sumNum = 0;

  // for of 써보고 싶어서 써봤음
  for (let num of arr) {
    num % 2 && oddArr.push(num);
  }
  // 배열안에 숫자들 forEach로 더하기
  oddArr.forEach((num) => {
    sumNum += num;
  });
  return console.log(sumNum, Math.min(...oddArr)); // 256, 41
}

let arr = [12, 77, 38, 41, 53, 92, 85];

// 두번째 답안

function solution(arr) {
  let minNum = Number.MAX_SAFE_INTEGER;
  let sumNum = 0;
  arr
    // filter로 홀수만 남기기
    .filter((num) => num % 2 !== 0)
    // 배열안에 숫자들 forEach로 더하기
    .forEach((num) => {
      sumNum += num;
      // 저번에 쌤이 했던 방식 -> 제일 큰 숫자 두고 그것보다 작으면 선언
      if (minNum > num) {
        minNum = num;
      }
    });

  return console.log(sumNum, minNum); // 256, 41
}

let arr = [12, 77, 38, 41, 53, 92, 85];

// 선생님 답안

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) {
        min = x;
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); // [256, 41]
