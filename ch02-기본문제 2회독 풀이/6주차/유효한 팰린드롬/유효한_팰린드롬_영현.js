// 유효한 팰린드롬

// 답안
function solution(str) {
  const mainStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const reStr = mainStr.split("").reverse().join("");
  return reStr === mainStr ? "YES" : "NO";
}

const str = "found7, time: study; Yduts; emit, 7Dnuof";
solution(str);
