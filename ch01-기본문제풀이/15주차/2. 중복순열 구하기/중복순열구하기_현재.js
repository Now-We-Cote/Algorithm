{
  const solution = (number, m) => {
    let answer = [];
    let temp = new Array(m).fill(0);
    const DFS = (level) => {
      if (level === m) {
        // 종료 지점
        // 여기서 tmp를 출력한다
        answer.push(temp.slice()); // 깊은 복사 - 각 시점의 참조값을 보여준다
      } else {
        // 깊게 가냐 안가냐에 따라 pop여부 결정
        for (let i = 1; i <= number; i++) {
          temp[level] = i;
          DFS(level + 1);
        }
      }
    };
    DFS(0);
    return answer;
  };

  const number = 3;
  const m = 2;

  solution(number, m);
}
