// 재귀함수를 이용한 이진수 출력

// 문제 - 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.

// 입력 - 첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.

// 출력 - 첫 번째 줄에 이진수를 출력하세요.

// 입력 예시 - 11

// 출력 예시 - 1011

{
  const print = (n, result) => {
    const newResult = result + String(n % 2);
    return n === 0 ? result : print(parseInt(n / 2), newResult);
  };

  const solution = (N) => {
    let result = "";

    return print(N, result).split("").reverse().join("");
  };
}
