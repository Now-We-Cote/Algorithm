{
  // 블루트포스의 전형적인 문제 - for를 하나하나 다 돌면서 확인해야함
  // 멘토, 멘티가 되는 경우의 수 = 4*3*2*1
  const solution = (test) => {
    let answer = 0;
    const count = test.length;
    const students = test[0].length;
    for (let i = 1; i <= students; i++) {
      // i는 멘토 학생
      for (let j = 1; j <= students; j++) {
        // j는 멘티 학생
        let cnt = 0; // 각 시험 시작하기 전에 초기화
        for (let k = 0; k < count; k++) {
          // 각 시험 회차
          let pi = 0; // 멘토 등수
          let pj = 0; // 멘티 등수
          for (let s = 0; s < students; s++) {
            // 각 시험 별 학생 등수
            if (test[k][s] === i) pi = s; // k열s행에 i학생이 있으면 pi에 등수(s)를 넣어라
            if (test[k][s] === j) pj = s;
          }
          // 한 회 당 시험등수비교
          if (pi < pj) cnt++;
        }
        if (cnt === count) answer++; // 만약 시험 횟수만큼 멘토가 더 상위권이였다면 answer에 더해줘라
      }
    }
  };
}
