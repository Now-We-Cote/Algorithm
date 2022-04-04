// Afmf #으로

// 문제 - 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 "A" 를
// 모두 "#" 으로 바꾸어 출력하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 문자열이 입력된다.

// 출력 - 첫 번째 줄에 바뀐 단어를 출력한다.

// 입력 예제 - BANANA

// 출력 예제 - B#N#N#

{
  const solution = (string) => {
    return string
      .split("")
      .map((char) => (char === "A" ? "#" : char))
      .join("");
  };
}

// 문자열 바꿀 때는 replaceAll이 존재함

{
  const solution2 = (string) => {
    return string.replaceAll("A", "#");
  };
}
