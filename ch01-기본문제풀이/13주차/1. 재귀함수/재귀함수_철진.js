// 재귀 함수

// 문제 - 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

// 출력 - 첫째 줄에 출력한다.

// 입력 예제 - 3

// 출력 예제 - 1, 2, 3

{
  const print = (N, i, array) => {
    array.push(i);
    return N === i ? array : print(N, i + 1, array);
  };

  const solution = (N) => {
    return print(N, 1, []);
  };
}
