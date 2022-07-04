{
  const count = (addresses, distance) => {
    // 가장 가까운 두 말의 거리를 두었을 때 몇마리 배치 가능한가
    let cnt = 1; // 말 마리
    let ep = addresses[0]; // 첫번째 자리
    for (let i = 1; i < addresses.length; i++) {
      if (addresses[i] - ep >= distance) {
        // distance보다 넓어야 말을 넣을 수 있겠죠?
        cnt++;
        ep = addresses[i];
      }
    }
    return cnt;
  };

  const solution = (horseNum, addresses) => {
    addresses = addresses.sort((a, b) => a - b);
    let answer = 0;
    let lt = 1; // 맨 앞
    let rt = addresses[addresses.length - 1]; // 맨 끝

    while (lt <= rt) {
      let half = Math.floor((lt + rt) / 2); // 가장 가까운 두 말의 거리
      if (count(addresses, half) >= horseNum) {
        answer = half; // 가능한 거리
        lt = half + 1;
      } else {
        // half 거리로 3마리 배치하기 어려운 경우
        rt = half - 1;
      }
    }
    return answer;
  };

  const arr = [1, 2, 8, 4, 9];

  solution(3, arr);
}
