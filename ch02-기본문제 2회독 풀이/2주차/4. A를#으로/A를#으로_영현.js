// A를 #으로

// 답안

const solution = (str) => {
  const answer = str.replaceAll("A", "#");
  // const answer = str.replace(/A/g, '#');

  return answer;
};

const str = "BANANA";

console.log(solution(str)); // 3
