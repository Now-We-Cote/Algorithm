// 숫자만 추출

// 답안
function solution(str) {
  const mainStr = str.toLowerCase().replace(/[^0-9]/g, "");
  return Number(mainStr);
}

const str = "g0en2T0s8eSoft";
solution(str);
