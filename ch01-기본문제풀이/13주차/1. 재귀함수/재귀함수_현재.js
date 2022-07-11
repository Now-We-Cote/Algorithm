{
  const solution = (num) => {
    // 끝까지 돌게 해서, 끝에 왔을때 부터 반환하도록 한다
    const DFS = (num) => {
      if (num == 0) return;
      DFS(num - 1);
      console.log(num);
    };
    DFS(num);
  };

  solution(3);
}
