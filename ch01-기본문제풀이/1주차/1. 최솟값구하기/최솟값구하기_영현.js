// 최솟값 구하기

// 답안

function solution(a, b, c) {
  // 제일 최소값 구하기
  // let MinNum = Math.min(a,b,c);

  // 제일 최대값 구하기
  // let MaxNum = Math.max(a,b,c)

  let answer = a;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (answer > c) {
    answer = c;
  }

  return answer;
}

console.log(solution(1, 7, 4)); // 1
