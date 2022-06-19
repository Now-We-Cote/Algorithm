{
  const solution = (fe) => {
    // (는 stack에 추가
    // )일때는 앞에꺼가 (인지 확인 맞으면 레이저니까 stack에 pop 시킨다
    // 그리고 나며지를 answer에 담는다
    // )일때 앞에꺼가 (가 아닌 경우, 닫는 거여서 (를 pop 시키고 1을 answer에 더한다 -> 잘렸으니까
    const feArr = fe.split("");
    const stack = [];
    let answer = 0;
    for (let i = 0; i < fe.length; i++) {
      if (feArr[i] === "(") stack.push("(");
      if (feArr[i] === ")" && feArr[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      }
      if (feArr[i] === ")" && feArr[i - 1] !== "(") {
        stack.pop();
        answer += 1;
      }
    }
    return answer;
  };

  const a = "()(((()())(())()))(())";
  const b = "(((()(()()))(())()))(()())";

  solution(b);
}
