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
        const lastIdx = stack.lastIndexOf("("); // while문을 사용하는 경우 "("가 pop한 뒤에 끝남 -> pop이 먼저고 그 뒤에 유효성 검사하니까!!
        stack.splice(lastIdx);
      }
    }
    return stack.join("");
  };

  const Char = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
  solution(Char);
}
