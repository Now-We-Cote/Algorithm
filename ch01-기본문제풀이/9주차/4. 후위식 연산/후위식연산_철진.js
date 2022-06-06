// 후위식 연산

// 문제 - 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// 입력 - 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// 출력 - 연산한 결과를 출력합니다.

// 입력 예시 - "352+*9-"

// 출력 예시 - 12

{
  const caculateNumber = (operator, a, b) => {
    const operators = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b,
    };

    return operators[operator];
  };

  const solution = (postfix) => {
    const stack = [];

    for (str of postfix) {
      if (!isNaN(+str)) {
        stack.push(str);
      } else {
        const b = Number(stack.pop());
        const a = Number(stack.pop());
        stack.push(caculateNumber(str, a, b));
      }
    }

    return stack[0];
  };
}
