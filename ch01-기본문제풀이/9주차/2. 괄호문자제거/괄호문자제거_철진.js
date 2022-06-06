// 괄호문자제거

// 문제 - 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 입력 - 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력 - 남은 문자만 출력한다.

// 입력 예시 - "(A(BC)D)EF(G(H)(IJ)K)LM(N)"

// 출력 - "EFLM"

{
  const findOpeningBraket = (array) => {
    return array.pop() === "(" ? true : findOpeningBraket(array);
  };

  const solution = (string) => {
    const stack = [];

    for (s of string) {
      if (s !== ")") {
        stack.push(s);
      }

      if (s === ")" && stack.length > 0) {
        findOpeningBraket(stack);
      }
    }

    return stack.join("").replaceAll("(", "");
  };
}
