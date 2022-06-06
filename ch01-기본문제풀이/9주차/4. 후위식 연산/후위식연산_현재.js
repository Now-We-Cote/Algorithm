{
  const solution = (exp) => {
    // 숫자를 만나면 무조건 push
    // 연산자를 만나는 순간 pop 시킨다
    // 먼저나온게 rt, 나중에 나온게 lt
    // pop 시킨 것 -> 연산해주고, 연산해준 결과를 다시 push한다
    const stack = [];
    const ExpArr = exp.split("");

    for (let i = 0; i < ExpArr.length; i++) {
      const stackLen = stack.length;
      if (!isNaN(+ExpArr[i])) {
        stack.push(+ExpArr[i]);
      }
      if (ExpArr[i] === "+") {
        const sum = stack[stackLen - 2] + stack[stackLen - 1];
        stack.pop();
        stack.pop();
        stack.push(sum);
      }
      if (ExpArr[i] === "-") {
        const sum = stack[stackLen - 2] - stack[stackLen - 1];
        stack.pop();
        stack.pop();
        stack.push(sum);
      }
      if (ExpArr[i] === "*") {
        const sum = stack[stackLen - 2] * stack[stackLen - 1];
        stack.pop();
        stack.pop();
        stack.push(sum);
      }
      if (ExpArr[i] === "/") {
        const sum = stack[stackLen - 2] / stack[stackLen - 1];
        stack.pop();
        stack.pop();
        stack.push(sum);
      }
    }
    if ((stack.length = 1)) {
      return +stack[0];
    }
  };

  const expression = "352+*9-";
  solution(expression);
}
