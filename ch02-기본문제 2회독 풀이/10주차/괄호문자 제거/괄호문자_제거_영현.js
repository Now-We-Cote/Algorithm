// 괄호 문자 제거

// 답안
const solution = (str) => {
  let answer = "";
  let arr = [];
  [...str].forEach((a) => {
    if (a === ")") {
      while (arr.pop() !== "(");
    } else {
      arr.push(a);
    }
  });
  return arr.join("");
};
const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
solution(str);
