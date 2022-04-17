// 가위바위보

// 답안

function solution(a, b) {
  // 가위바위보 게임 결과 객체화
  const gameResult = {
    0: "D",
    1: "A",
    2: "B",
    "-2": "A",
    "-1": "B",
  };
  // 게임 결과값
  result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(gameResult[a[i] - b[i]]);
  }
  return result;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

solution(a, b);
