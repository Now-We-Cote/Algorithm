// 숫자만 추출

// 답안

const solution = (str) => {
  return Math.floor(str.replace(/[^0-9]/gi, ""));
};

const str = "g0ekd4di830dff0";

solution(str); //48300
