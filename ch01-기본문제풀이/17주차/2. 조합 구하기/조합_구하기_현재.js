{
  // 내가 푼것 - 오답
  const solution = (n, m) => {
    let answer = 0;
    let ch = Array.from({ length: m + 1 }, () => 0); // 수열 확인용
    let p = Array.from({ length: m }, () => 0); // 조합용

    const DFS = (level) => {
      if (level === m) {
        answer++;
      } else {
        // 순열 만들기
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            p[level] = i;
            DFS(level + 1);
            ch[i] = 0;
          }
        }
      }
    };
    DFS(0);
    return answer;
  };

  solution(4, 2);
}

{
  // 선생님 풀이..가지를 뻗는 방법이 잘못되었었음
  const solution = (n, m) => {
    let answer = [];
    let tmp = Array.from({ length: m }, () => 0); // 조합 경우의 수 담는 곳
    const DFS = (L, s) => {
      if (L === m) {
        // 종착점
        answer.push(tmp.slice()); // 깊은복사
      } else {
        // n개씩 뻗어나가야된다
        for (let i = s; i <= n; i++) {
          // i = 뻗는 숫자 (화살표) = i를 뽑음
          tmp[L] = i; // 조합에 업데이트
          DFS(L + 1, i + 1);
        }
      }
    };
    DFS(0, 1);
    return answer;
  };

  solution(4, 2);
}
