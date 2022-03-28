// 문제 : a, b, c 세 개의 막대 길이가 삼각형을 만들 수 있는지 구하라

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
