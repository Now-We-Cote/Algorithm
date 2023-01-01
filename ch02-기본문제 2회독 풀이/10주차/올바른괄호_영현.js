// 올바른 괄호

// 답안
const solution = (str) => {
  let answer = "YES";
  let arr = [];
  [...str].forEach((a) => {
    a === "(" ? arr.push(a) : arr.length === 0 ? (answer = "NO") : arr.pop();
  });
  return arr.length !== 0 ? "NO" : answer;
};
const str = "(()(()))(())";
solution(str);
