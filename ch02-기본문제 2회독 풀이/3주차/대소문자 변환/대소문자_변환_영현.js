// 대소문자 변환

// 답안

const solution = (str) => {
  const onChangeStr = (t) => {
    return t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase();
  };

  return str
    .split("")
    .map((t) => onChangeStr(t))
    .join("");
};

const str = "StuDY";

console.log(solution(str));
