{
  const solution = (men, sche) => {
    const queue = [...men];
    let answer = "YES";

    for (let x of sche) {
      // 수업을 포함하고 있는지 1차 확인
      // 그리고 순서가 맞는지 확인
      if (queue.includes(x)) {
        if (x !== queue.shift()) return "NO";
      }
    }
    // 예외적으로 수업이 남아있으면 no 처리
    if (queue.length > 0) return "NO";

    return answer;
  };

  const mendatory = "CBA";
  const schedule = "CBDAGE";

  solution(mendatory, schedule);
}
