// 홀수

// 문제 - 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최솟값을 찾는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다.
// 홀수가 한 개 이상 반드시 존재한다.

// 출력 - 첫째 줄에 홀수들의 합을 출력하고 , 둘째 줄에 홀수들 중에 최솟값을 출력한다.

// 입력 예제 - 12 77 38 41 53 92 85

// 예상 출력 값 - 256 41

// 풀이

{
  const solution = (input) => {
    const oddInputs = input
      .split(" ")
      .map((item) => Number(item))
      .filter((number) => number % 2 !== 0);

    const sum = oddInputs.reduce((acc, curr) => acc + curr);
    const min = Math.min(...oddInputs);

    return `${sum}\n ${min}`;
  };

  console.log(solution("12 77 38 41 53 92 85"));
}
