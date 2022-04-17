{
  const solution = (answers) => {
    // 앞에 문제는 틀렸는데 이번 문제는 맞췄으면 1점 (즉 한번 틀리면 보너스 점수 없어짐)
    // 연속으로 문제의 답을 맞추는 경우 횟수에 따라 n점
    let bonus = 0;
    let score = 0;
    for (let answer of answers) {
      if (answer === 1) {
        bonus += 1;
        score += bonus;
      } else {
        bonus = 0;
      }
    }
    return score;
  };

  const answer = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
  solution(answer);
}
