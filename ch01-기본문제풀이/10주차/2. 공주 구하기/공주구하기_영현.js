// 공주 구하기

// 답안

const solution = (P, K) => {
  let index = 1;
  let princeArr = new Array(P).fill().map((x, idx) => idx + 1); // fill로 undefined 값을 채워주고 map을 통해서 idx값을 재생성
  while (princeArr.length > 1) {
    if (index === K) {
      princeArr.shift();
      index = 0;
    }
    princeArr.push(princeArr.shift());
    index++;
  }
  return princeArr[0];
};
solution(8, 3); // 5
