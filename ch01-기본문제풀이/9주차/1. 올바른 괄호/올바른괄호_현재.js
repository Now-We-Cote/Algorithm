{
  const solution = (str) => {
    // 스택, 큐로 풀어야되니까
    // 괄호가 열린괄호면 arr 하나 만들어서 거기 넣어두고
    // 닫힌 괄호가 나타나면 pop시킨다
    // 그래서 arr에 괄호가 남아있으면 no, 괄호가 하나도 없으면 yes
    const StrArr = str.split("");
    const Stack = [];

    for (let item of StrArr) {
      if (item === "(") {
        Stack.push(item);
      }
      if (item === ")") {
        if (Stack.length === 0) return "NO";
        Stack.pop();
      }
    }

    return Stack.length > 0 ? "NO" : "YES";
  };

  const Str = "(()(()))(()";

  solution(Str);
}
