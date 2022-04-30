// 자릿수의 합

// 문제 - N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
// 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// 입력 - 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 10,000,000를 넘지 않는다.

// 출력 - 자릿수의 합이 최대인 자연수를 출력한다.

// 입력 예시 - 7 , [128, 460, 603, 40, 521, 137, 123]

// 출력 예시 - 137

{
  const solution = (N, numbers) => {
    return numbers.reduce(
      (acc, curr) => {
        let sum = String(curr)
          .split("")
          .reduce((acc, curr) => Number(acc) + Number(curr));
        if (sum > acc.maxSum) {
          return { maxNum: curr, maxSum: sum };
        } else if (sum === acc.maxSum) {
          return { ...acc, maxNum: acc.maxNum > curr ? acc.maxNum : curr };
        }
        return acc;
      },
      { maxNum: 0, maxSum: 0 }
    ).maxNum;
  };
}
