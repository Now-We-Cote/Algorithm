// 등수 구하기

// 답안
function solution(arr) {
  const scoreCard = [...arr].sort((a, b) => b - a);
  return arr.map((score) => scoreCard.indexOf(score) + 1);
}

const arr = [92, 92, 92, 100, 76];
solution(arr);
