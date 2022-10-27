// 가운데 문자 출력

// 답안

const solution = (str) => {
  const isOdd = str.length % 2;
  const midNum = str.length / 2;

  return isOdd ? str.substr(midNum, 1) : str.substr(midNum - 1, 2);
};

const str = "study";

console.log(solution(str));
