// 팩토리얼

// 자연수 N을 입력하면 N!값을 구하세요.

// 입력 - 첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.

// 출력 - 첫째 줄에 N팩토리얼 값을 출력합니다.

// 입력 예시 - 5

// 출력 예시 - 120

{
  const solution = (N) => {
    let result = 1;
    const DFS = (level) => {
      if (level > N) {
        return;
      } else {
        result *= level;
        DFS(level + 1);
      }
    };
    DFS(1);
    return result;
  };
}
