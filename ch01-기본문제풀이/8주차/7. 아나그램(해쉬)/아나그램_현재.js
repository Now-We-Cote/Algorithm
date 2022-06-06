{
  const solution = (arr) => {
    // 이것도 map 사용하는 거겠지요?
    // map끼리 비교해야되나 흠 근데 그러면 깊은복사여서 좀 구린거같은데
    let answer = "YES!";

    const a = arr[0];
    const b = arr[1];
    if (a.length !== b.length) return;
    // #1
    const first = new Map();
    for (let char of a) {
      if (first.has(char)) {
        first.set(char, first.get(char) + 1);
      } else {
        first.set(char, 1);
      }
    }
    // map을 두개 만들면 좋지 않다
    // 그래서 하나씩 다시 비교하면서 예외가 있는 경우 처리해준다
    for (let char of b) {
      if (!first.has(char) || first.get(char) === 0) answer = "NO!!!";
      first.set(char, first.get(char) - 1);
    }
    return answer;
  };

  const first = ["AbaAeCe", "baeeACA"];
  const second = ["abaCC", "Caaab"];

  solution(second);
}
