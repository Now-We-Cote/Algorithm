{
  const solution = (a, b) => {
    // 그냥 두개 합쳐버린 다음에 sort 하면 오름차순으로 합쳐짐
    const answer = [...a, ...b].sort((a, b) => a - b);
    return answer;
  };

  const arg1 = [1, 3, 5];
  const arg2 = [2, 3, 6, 7, 9];
  solution(arg1, arg2);
}
