// 세 수 중 최솟값 구하기

// 문제 - 100 이하의 자연수 A, B, C를 받아 세 수 중에서 가장 작은 값을 출력하는 프로그램을 작성하세요. (sort 사용하지 말고 if 문 등을 사용해보자.)

// 입력 - 첫 번째 줄에 100 이하의 세 자연수가 입력된다. 구분은 " " 으로 한다.

// 출력 - 첫 번째 줄에 가장 작은 수를 출력한다.

// 입력 예제 - 33 12 7

// 예상 출력 값 - 7

// 풀이

{
  const getMinNumber = (input) => {
    const inputArray = input.split(" ");

    let min = Number(inputArray[0]);

    inputArray
      .map((item) => Number(item))
      .forEach((number) => {
        if (number < min) {
          min = number;
        }
      });
    console.log(min);
  };

  getMinNumber("33 12 7"); // 7
}
