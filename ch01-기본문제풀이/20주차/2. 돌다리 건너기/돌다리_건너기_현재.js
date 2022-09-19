{
  // 상황만 바뀌고 똑~같은 문제
  // 돌이 n개지 도착지점은 n개를 넘어선 뭍이다! (n+1)

  const solution = (n) => {
    let answer = 0;
    let dy = Array.from({ length: n + 2 }, () => 0);
    dy[1] = 1;
    dy[2] = 2; // 이렇게 두개 초기화 시킨다 - 경우의 수가 2칸 까지니까
    for (let i = 3; i <= n + 1; i++) {
      dy[i] = dy[i - 2] + dy[i - 1];
    }

    answer = dy[8];
    return answer;
  };

  solution(7);
}
