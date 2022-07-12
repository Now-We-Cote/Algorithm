// 이진수 출력

// 답안
const answer = [];
const solution = (num) => {
  if (num === 0) return;
  solution(Math.floor(num / 2));
  answer.push(num % 2);
  return answer.join("");
};
const num = 11;
solution(num); //1011
