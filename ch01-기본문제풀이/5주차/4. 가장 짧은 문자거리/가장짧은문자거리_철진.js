// 가장 짧은 문자거리

// 문제 - 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의
// 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 문자열 s와 문자 t가 주어진다.
// 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력 - 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

// 입력 예시 - teachermode e

// 출력 예시 - 10121012210

{
  const solution = (string, char) => {
    return string
      .split("")
      .map((item, idx, array) => {
        const reverse = array
          .slice(0, idx + 1)
          .reverse()
          .indexOf(char);
        const forward = array.slice(idx).indexOf(char);
        return Math.min(
          reverse > -1 ? reverse : 101,
          forward > -1 ? forward : 101
        );
      })
      .join("");
  };
}
