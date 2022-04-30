// 회문문자열

// 답안

const solution = (str) => {
  const reverseStr = str.toLowerCase().split("").reverse().join("");
  return reverseStr === str.toLowerCase() ? "YES" : "NO";
};

const str = "taaraAT";

solution(str); // 'YES'
