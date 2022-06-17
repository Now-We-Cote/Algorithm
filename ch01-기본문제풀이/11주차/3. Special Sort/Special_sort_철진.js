// Special Sort(구글 인터뷰)

// 문제 - N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

// 입력 - 첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진 다. 숫자 0은 입력되지 않는다.

// 출력 - 정렬된 결과를 출력한다.

// 입력 예시 - 8, [1, 2, 3, -3, -2, 5, 6, -6]

// 출력 예시 - [-3, -2, -6, 1, 2, 3, 5, 6]

{
  const solution = (N, numbers) => {
    const negativeNumbers = [];
    const positiveNumbers = [];

    for (number of numbers) {
      number > 0 ? positiveNumbers.push(number) : negativeNumbers.push(number);
    }

    return [...negativeNumbers, ...positiveNumbers];
  };

  // 버블 정렬로 풀어야 하나?

  const bubbleSortSolution = (N, numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > 0 && numbers[j + 1] < 0) {
          [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        }
      }
    }
    return numbers;
  };
}
