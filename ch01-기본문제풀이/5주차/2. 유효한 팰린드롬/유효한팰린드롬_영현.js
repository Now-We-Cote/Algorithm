// 유효한 팰린드롬

// 답안

const solution = (str) => {
  // 문자만 추출하는 정규식 gi는 대소문자 모두
  str = str.replace(/[^a-z]/gi, "");
  const reverseStr = str.toLowerCase().split("").reverse().join("");
  return reverseStr === str.toLowerCase() ? "YES" : "NO";
};

const str = "found7, time: study; Yduts; emit, 7Dnuof";

solution(str); // 'YES'
