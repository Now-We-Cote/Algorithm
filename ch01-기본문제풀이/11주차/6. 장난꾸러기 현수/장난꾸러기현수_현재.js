{
  const solution = (len, height) => {
    let hyunsuIdx, friendIdx;
    // 1. 짝궁을 찾는다
    // 짝궁 조건 : 앞 사람 보다 키가 작다
    for (let i = 0; i < len; i++) {
      const friend = height[i];
      if (friend < height[i - 1]) {
        // 2. 짝궁보다 앞에 있는 것 중에 짝궁보다 크고,
        // 뒷친구랑 키가 같거나 뒷친구보다 큰 걸 찾는다
        for (let j = 0; j < i - 1; j++) {
          const hyunsu = height[j];
          if (hyunsu > friend && hyunsu >= height[j + 1]) {
            console.log(i);
            console.log("hyunsu: ", hyunsu, j);
            hyunsuIdx = j;
            friendIdx = i;
            break;
          }
        }
      }
    }
    return [hyunsuIdx + 1, friendIdx + 1];
  };

  // const height = [120, 125, 152, 130, 135, 135, 143, 127, 160]

  const height = [120, 130, 150, 150, 130, 150];

  solution(9, height);
}
