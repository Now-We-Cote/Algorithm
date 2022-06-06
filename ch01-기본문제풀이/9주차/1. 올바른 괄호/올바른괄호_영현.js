// 올바른 괄호

// 답안

const solution = (str) => {
  let arr = [];
  [...str].map((x) => {
    if (x === "(") {
      arr.push(x);
    } else {
      arr.pop();
    }
  });
  return arr.length !== 0 ? "NO" : "YES";
};
const str = "(()(()))(()";
solution(str);
