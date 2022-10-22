// 대문자로 통일

// 답안

const solution = (str) => {
  const getUpperStr = (t) => {
    return t.toUpperCase();
    // return t !== t.toUpperCase() ? t.toUpperCase() : t
    // 다시 생각해보니 전부 대문자로 출력해도 문제없음
  };

  return str
    .split("")
    .map((t) => getUpperStr(t))
    .join("");
};

const str = "ItisTimeToStudy";

console.log(solution(str));
