// 대문자 찾기

// 답안

const solution = (str) => {
  const isUpperStr = (t) => {
    if (t === t.toUpperCase()) return true;
  };
  return str.split("").filter((t) => isUpperStr(t));
};

const str = "KoreaTimeGood";

console.log(solution(str));
