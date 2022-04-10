// 중복 문자 제거

// 문제 - 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을
// 작성하세요. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// 입력 - 첫 줄에 문자열이 입력됩니다.

// 출력 - 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

// 입력 예시 - ksekkset

// 출력 예시 - kset

{
  const solution = (string) => {
    return string
      .split("")
      .filter((char, idx) => string.indexOf(char) === idx)
      .join("");
  };
}
