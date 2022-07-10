// 이진트리 순회(깊이우선탐색)

// 문제 - 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.

// 연습 예시 - 1 / 2, 3 / 4 5, 6 7

// 전위순회 출력  - 1 2 4 5 3 6 7

{
  const solution = (n) => {
    const dps = (n) => {
      if (n > 7) {
        return;
      }

      console.log(n);
      dps(n * 2);
      dps(n * 2 + 1);
    };

    dps(n);
  };
}

// 중위순회 출력 - 4 2 5 1 6 3 7

{
  const solution = (n) => {
    const dps = (n) => {
      if (n > 7) {
        return;
      }
      dps(n * 2);
      console.log(n);
      dps(n * 2 + 1);
    };

    dps(n);
  };
}

// 후위순회 출력 - 4 5 2 6 7 3 1

{
  const solution = (n) => {
    const dps = (n) => {
      if (n > 7) {
        return;
      }
      dps(n * 2);
      dps(n * 2 + 1);
      console.log(n);
    };

    dps(n);
  };
}
