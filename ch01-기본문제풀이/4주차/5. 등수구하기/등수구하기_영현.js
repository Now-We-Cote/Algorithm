// 등수 구하기

// 답안

function solution(arr) {
  let answer = [];
  // sort 메소드가 기존 배열을 바꾸기 때문에 복사해서 사용 -> 철진님 답을 보고 배움..
  let arrs = [...arr];
  return arr.map((e) => arrs.sort((a, b) => b - a).indexOf(e) + 1);
}

const points = [98, 100, 29, 45, 45, 100];

solution(points);
