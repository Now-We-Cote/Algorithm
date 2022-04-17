{
  const solution = (a, b) => {
    // 가위: 1, 바위 : 2, 보 : 3
    // 가위 - 바위 : 바위 승 1 - 2 => 2낸 사람이 이김
    // 가위 - 보 : 가위 승 1 - 3 => 1낸 사람이 이김
    // 바위 -보 : 보 승 2 - 3 => 3낸 사람이 이김
    // 같은거는 = 동점
    const gameRule = {
      "-2": "A",
      "-1": "B",
      0: "D",
      1: "A",
      2: "B",
    };
    const result = a.map((item, idx) => item - b[idx]).map((item) => gameRule[item.toString()]);
    return result.join("\n");
  };

  const round = 5;
  const a = [2, 3, 3, 1, 3];
  const b = [1, 1, 2, 2, 3];

  solution(a, b);
}
