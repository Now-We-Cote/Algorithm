{
  const solution = (students) => {
    // 입력값은 1차원 배열이지만 가공할 때 2차원으로 만들어서 처리해야함
    // filter로 현재 것 보다 더 큰 값이 몇개나 있는지 확인
    const rank = students.map((score) => students.filter((othersScore) => score < othersScore).length + 1);
    return rank;
  };

  const students = [87, 89, 92, 100, 76];
  const students2 = [82, 87, 92, 92, 92, 100];

  solution(students);
}
