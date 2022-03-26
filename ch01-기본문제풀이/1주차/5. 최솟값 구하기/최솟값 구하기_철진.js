// 최솟값 구하기

// 문제 - 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// 입력 - 첫  번째 줄에 7개의 수가 주어진다.

// 출력 - 첫 번째 줄에 가장 작은 값을 출력한다..

// 입력 예제 - 1 22 33 4 7 12 15

// 출력 예제 - 1

{
  const solution = (input) => {
    const inputArray = input.split(" ").map((item) => Number(item));
    let min = inputArray[0];

    inputArray.forEach((number) => {
      if (number < min) {
        min = number;
      }
    });
    return min;
  };

  console.log(solution("1 22 33 4 7 12 15"));
}
