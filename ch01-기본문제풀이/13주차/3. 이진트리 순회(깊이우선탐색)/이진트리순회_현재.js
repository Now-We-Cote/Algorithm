{
  // 전위 순회
  const solution = (n) => {
    if (n > 7) return;
    else {
      console.log(n);
      solution(n * 2);
      solution(n * 2 + 1);
    }
  };
  solution(1);
}

{
  // 중위 순회
  const solution = (n) => {
    if (n > 7) return;
    else {
      solution(n * 2);
      console.log(n);
      solution(n * 2 + 1);
    }
  };
  solution(1);
}

{
  // 후위 순회
  const solution = (n) => {
    if (n > 7) return;
    else {
      solution(n * 2);
      solution(n * 2 + 1);
      console.log(n);
    }
  };
  solution(1);
}
