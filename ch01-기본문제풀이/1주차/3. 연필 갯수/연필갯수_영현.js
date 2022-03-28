// 연필 갯수 구하기

// 답안

function solution(a) {
  const dozen = 12;
  let answer = Math.floor(a / dozen);
  // 다스로 학생 수가 딱 떨어질 때
  if (a % dozen) {
    return answer + 1;

    // 다스로 학생 수가 딱 떨어지지 않을 때
  } else {
    return answer;
  }
}

// 모범 답안

function solution(a) {
  let answer = Math.ceil(a / 12);

  return answer;
}

console.log(solution(122)); // 11
