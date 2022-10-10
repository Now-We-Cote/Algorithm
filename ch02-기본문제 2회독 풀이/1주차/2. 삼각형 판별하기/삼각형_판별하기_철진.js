// 삼각형 판별하기

// 문제 - 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 입력 - 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// 출력 - 첫 번째 줄에 “YES", "NO"를 출력한다.

// 입력 예시 - [6, 7, 11]

// 출력 예시 - YES

// 입력 예시 - [13, 33, 17]

// 출력 예시 - NO

{
  const solution = (numbers) => {
    let max = Math.max(...numbers);
    let sum = numbers.reduce((a, b) => a + b);

    if (sum > max * 2) return 'YES';
    return 'NO';
  };
}
