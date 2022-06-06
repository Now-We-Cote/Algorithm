// 괄호 문자 제거

// 답안

const solution = (str) => {
  let answer = "";
  let arr = [];
  [...str].forEach((x) => {
    if (x !== ")") {
      arr.push(x);
    } else {
      while (arr.pop() !== "("); // 동희님의 엄청난 답을 배꼇습니다...ㅠㅠ
    }
  });
  return arr;
};
const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
solution(str);
