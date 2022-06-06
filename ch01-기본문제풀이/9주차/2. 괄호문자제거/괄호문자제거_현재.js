{
  const solution = (str) => {
    // 다 더하다가 괄호가 완성되면 완성된 녀석들을 소거해준다
    const stack = [];
    const strArr = str.split("");
    for (char of strArr) {
      if (char !== ")") {
        stack.push(char);
      } else {
        // ) 닫히는거 발견 = () 만족하는 부분 제거
        const lastIdx = stack.lastIndexOf("(");
        stack.splice(lastIdx);
      }
    }
    return stack.join("");
  };

  const Char = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
  solution(Char);
}
