// 연필 개수

// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// 입력 - 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.

// 출력 - 첫 번째 줄에 필요한 다스 수를 출력합니다.

// 입력 예시 - 25

// 출력 예시 - 3

// 입력 예시 - 178

// 출력 예시 - 15

{
  const solution = (count) => {
    const DOZEN = 12;

    return Math.ceil(count / 12);
  };
}
