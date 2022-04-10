// 중복 단어 제거

// 문제 - N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.

// 입력 - 첫 줄에 자연수 N이 주어진다(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력 - 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.

// 입력 예시 - 5 good, time, good, time, student

// 출력 예시 - good, time, student

{
  const solution = (count, words) => {
    return words.filter((word, idx) => words.indexOf(word) === idx);
  };
}
