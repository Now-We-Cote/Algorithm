// 회문 문자열

// 답안
function solution(str) {
  const mainStr = str.toLowerCase();
  const reStr = mainStr.split("").reverse().join("");
  return reStr === mainStr ? "YES" : "NO";
}

const str = "gooG";
solution(str);
