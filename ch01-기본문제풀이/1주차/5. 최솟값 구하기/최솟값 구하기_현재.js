// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.
// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1 2

{
  // 내 풀이
  const solution = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[0];
  };

  // 선생님 풀이
  const goodSolution = (arr) => {
    let answer,
      min = Number.MAX_SAFE_INTEGER; // 숫자로 미리 지정

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    answer = min;
    return answer;
  };
}
