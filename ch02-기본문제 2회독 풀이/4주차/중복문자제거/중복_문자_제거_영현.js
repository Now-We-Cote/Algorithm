// 중복 문자 제거

// 답안

const solution = (str) => {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (answer.indexOf(str[i]) === -1) {
      answer += str[i];
    }
  }
  return answer;
};

const solution2 = (str) => {
  const set = new Set(str);
  const newArr = [...set].join("");

  return newArr;
};

const str = "ksekkset";

console.log(solution2(str));
