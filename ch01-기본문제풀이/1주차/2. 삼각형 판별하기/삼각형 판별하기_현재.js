// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1: 6 7 11
// ▣ 출력예제 1: YES
// ▣ 입력예제 1: 13 33 17
// ▣ 출력예제 1: NO
{
  // 내 풀이
  const solution = (a, b, c) => {
    // 삼각형의 조건 : 가장 넓은 변의 길이는 짧은 두개의 변의 길이의 합보다 작아야한다
    const arr = [a, b, c];
    arr.sort((a, b) => a - b); // 내림차순
    if (arr[0] + arr[1] > arr[2]) {
      return "YES";
    } else {
      return "NO";
    }
  };

  // 모범답안
  const goodSolution = (a, b, c) => {
    // 삼각형의 특징 : 두변의 합은 항상 남은 한 변보다 크다! (왜냐면 가장 넓은 변도 그러하니까,,)
    if (a + b > c && a + c > b && b + c > a) {
      return "YES";
    } else {
      return "NO";
    }
  };

  console.log(solution(6, 7, 11));
}
