// 가장 긴 문자열

// 문제 - N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

// 입력 - 첫 줄에 자연수 N이 주어진다. (3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// 각 문자열의 길이는 서로 다르다.

// 출력 - 첫 줄에 가장 긴 문자열을 출력한다.

// 입력 예시 - 5, teacher, time, student, beautiful, good

// 출력 예시 - beautiful

{
  const solution = (count, words) => {
    return words.filter(
      (word) => word.length === Math.max(...words.map((word) => word.length))
    )[0];
  };
}
