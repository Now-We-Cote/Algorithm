// 1부터 N까지 합 출력하기

// 문제 - 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 20이하의 자연수 N이 입력된다..

// 출력 - 첫 번째 줄에 1부터 N까지의 합을 출력한다.

// 입력 예제 - 7

// 출력예제 - 28

// 입력예제 - 12

// 출력예제 - 78

{
  const solution = (lastNumber) => {
    return [...Array(lastNumber)]
      .map((item, index) => index + 1)
      .reduce((acc, curr) => acc + curr);
  };

  console.log(solution(7)); // 28

  console.log(solution(12)); // 78
}
