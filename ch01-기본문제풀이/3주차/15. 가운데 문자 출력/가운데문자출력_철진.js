// 가운데 문자 출력

// 문제 - 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을
// 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// 입력 - 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// 출력 - 첫 줄에 가운데 문자를 출력합니다.

// 입력 예시 - study

// 출력 예시 - u

{
  const solution = (string) => {
    return string.length % 2 === 1
      ? string.slice(string.length / 2, string.length / 2 + 1)
      : string.slice(string.length / 2 - 1, string.length / 2 + 1);
  };
}

// substr을 쓰면 string.length 를 한번 덜 쓸 수 있다.

{
  const solution = (string) => {
    return string.length % 2 === 1
      ? string.substr(string.length / 2, 1)
      : string.substr(string.length / 2 - 1, 2);
  };
}
