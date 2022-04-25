// 문자열 압축

// 문제 - 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.

// 입력 - 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력 - 첫 줄에 압축된 문자열을 출력한다.

// 입력 예시 - KKHSSSSSSSE

// 출력 예시 - K2HS7E

{
  const solution = (string) => {
    let combo = 1;

    return string.split("").reduce((acc, curr, idx) => {
      if (string.indexOf(curr) === idx) {
        const result = acc + `${combo !== 1 ? combo : ""}${curr}`;
        combo = 1;
        return result;
      } else {
        combo++;
        return acc;
      }
    }, "");
  };
}

// 위의 풀이는 KKHSSSKKSSE 등의 대처가 불가능, 아래 풀이로 보완

{
  const solution = (string) => {
    let combo = 1;

    return string.split("").reduce((acc, curr, idx) => {
      if (curr !== string[idx + 1]) {
        const result = combo === 1 ? acc + curr : acc + combo;
        combo = 1;
        return result;
      } else {
        const result = combo === 1 ? acc + curr : acc;
        combo++;
        return result;
      }
    }, "");
  };
}
