// 삼각형 판별하기

// 문제 - 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을
// 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 입력 - 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// 출력 - 첫 번째 줄에 “YES", "NO"를 출력한다.

// 입력 예제 - 14 12 6

// 예상 출력 값 - YES

// 입력 예제 - 11 5 4

// 예상 출력 값 - NO

const solution = (a, b, c) => {
  let answer;
  let max = Math.max(a, b, c);

  if (a + b + c > max * 2) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
};

console.log(solution(14, 12, 6)); // YES

console.log(solution(11, 5, 4)); // NO
