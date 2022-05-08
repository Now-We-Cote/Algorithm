// 졸업선물

// 답안

const solution = (max, arr) => {
  let answer = 0;
  // 학생 수
  let student = arr.length;
  // 총 비용으로 정렬
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < student; i++) {
    // 50% 할인 받은 제품을 뺀 나머지 금액
    let restMoney = max - (arr[i][0] / 2 + arr[i][1]);
    // 50% 할인 받은 제품 빼고 ++ 시킬 cnt 변수
    let cnt = 1;
    for (let j = 0; j < student; j++) {
      if (j !== i && arr[j][0] + arr[j][1] <= restMoney) {
        restMoney -= arr[j][0] + arr[j][1];
        cnt++;
      }
      // restMoney가 이제 없어질 때 break 걸어 둠
      else {
        break;
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
};

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

solution(28, arr); // '137'
