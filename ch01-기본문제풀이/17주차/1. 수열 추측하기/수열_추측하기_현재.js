{
  const solution = (n, f) => {
    let answer,
      flag = 0;
    let dy = Array.from(Array(11), () => Array(11).fill(0)); // 메모이제이션 - 10까지 들어온다니까 11로,,
    let ch = Array.from({ length: n + 1 }, () => 0); // 체크배열
    let p = Array.from({ length: n }, () => 0); // 순열 저장소
    let b = Array.from({ length: n }, () => 0); // 미리 파스칼 조합 만들어둘 곳 ([1, 3, 3, 1] 이런식으로)

    // 콤비네이션 구하는 DFS 함수 - nCr 형태 (메모이제이션 활용)
    const combination = (n, r) => {
      if (dy[n][r] > 0) return dy[n][r];
      if (n === r || r === 0) return 1;
      else return (dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
    };

    // L = level, sum = 최종 누적된 합
    const DFS = (L, sum) => {
      // 여기서 순열 정하면 됨

      if (flag) return;
      if (L === n && sum === f) {
        // 순열이 완성된 경우
        answer = p.slice(); // 깊은복사
        flag = 1; // 만약 완료되었을 경우 더 돌지못하게 flag 활성화
      } else {
        // 순열 만드는 곳
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            // 체크가 안되어야 사용할 수 있음
            ch[i] = 1; // 비어있는데 채워준다
            p[L] = i;
            DFS(L + 1, sum + b[L] * p[L]);
            ch[i] = 0; // DFS로 넘긴다음에 초기화해준다 (매번 건건이 확인해야되니까)
          }
        }
      }
    };
    // 콤비네이션 값 넣어주기 (b 완성)
    for (let i = 0; i < n; i++) {
      b[i] = combination(n - 1, i); // 3C0, 3C1, 3C2, 3C3 이렇게 진행되야하기때문에 i를 뒤에 넣어준다
    }

    DFS(0, 0);
    // console.log(answer)
    return answer;
  };

  solution(4, 16);
}
