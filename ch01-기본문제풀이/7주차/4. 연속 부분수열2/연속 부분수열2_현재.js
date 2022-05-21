{
  const solution = (total, arr) => {
    // 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
    // 이햐여서 조금 더 다르네
    let answer = 0,
      lt = 0,
      sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt];
      while (sum > total) {
        sum -= arr[lt++];
      }
      answer += rt - lt + 1;
    }
    return answer;
  };

  const arr = [1, 3, 1, 2, 3];

  solution(5, arr);
}
