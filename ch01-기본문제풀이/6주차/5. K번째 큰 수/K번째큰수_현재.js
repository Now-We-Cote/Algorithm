{
  // 세장을 뽑아 자릿수 별로 모두 합한 값 기재
  // 세장을 뽑을 수 있는 경우의 수를 모두 기재 <- 그렇다고 해도 set으로 밀어버리겠군
  // 기록한 값 중 k번째 큰 수?

  const solution = (n, k, cards) => {
    const total = [];
    for (let i = 0; i < n; i++) {
      // 첫번째 고른 숫자
      for (let j = i + 1; j < n; j++) {
        //두번째 고른 숫자
        for (let k = j + 1; k < n; k++) {
          const add = cards[i] + cards[j] + cards[k];
          total.push(add);
        }
      }
    }
    const settled = new Set(total);
    const finalTotal = [...settled];
    const answer = finalTotal.sort((a, b) => b - a)[k - 1];
    return answer;
  };

  const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

  solution(10, 3, cards);
}
